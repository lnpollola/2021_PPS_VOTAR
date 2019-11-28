import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Feedback, ContactType } from '../../clases/feedback';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../../servicios/firebase.service';


@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css'],
  providers: [NgbRatingConfig]
})
export class EncuestaComponent implements OnInit {

  currentRateMesa = 0;
  currentRateRest = 0;
  currentRateMozo = 0;
  currentRateCoci = 0;

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  }

  
  validationMessages = {
    'firstname': {
      'required':      'Nombre requerido.',
      'minlength':     'Minimo 2 caracteres.',
      'maxlength':     'Primer nombre no puede ser mas largo que 25.'
    },
    'lastname': {
      'required':      'Apellido requerido.',
      'minlength':     'Apellido 2 caracteres.',
      'maxlength':     'Apellido no puede ser mas largo que 25.'
    },
    'telnum': {
      'required':      'Numero de telefono requerido',
      'pattern':       'El telefono debe ser solo números'
    },
    'email': {
      'required':      'Email es requerido',
      'email':         'Formato no valido de Email'
    },
  };

  constructor(
          private fb: FormBuilder,
          config: NgbRatingConfig,
          private baseService:FirebaseService
            ) 
    {
    this.createForm();
    config.max = 10;
    config.readonly = false;
   }

  ngOnInit() {
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: [0 ,[Validators.required, Validators.pattern]],
      email: ['',[Validators.required,Validators.email]],
      agree: false,
      contacttype: 'None',
      message: ''
    });

    this.feedbackForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();  //reset validation message now
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);

    this.baseService.addItem('comanda/Encuestas',this.feedback); 


    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }


}
