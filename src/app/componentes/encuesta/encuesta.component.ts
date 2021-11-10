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

  puntuacionMesa = 0;
  puntuacionEscuela = 0;
  puntacionBoleta = 0;
  puntuacionGeneral = 0;

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
      firstname: [''],
      lastname: [''],
      telnum: [this.currentRateCoci],
      email: [''],
      agree: false,
      contacttype: 'None',
      message: ''
    });

    this.feedbackForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); 
  }

  onValueChanged(data?: any) {
   

      this.feedbackForm = this.fb.group({
        message: '',
        puntuacionMesa: '',
        puntuacionEscuela: '',
        puntacionBoleta: '',
        puntuacionGeneral: ''
      });

      const form = this.feedbackForm;
    return;
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);

    this.baseService.addItem('votar/Encuestas',this.feedback); 


    this.feedbackForm.reset({
      puntuacionMesa: '',
      puntuacionEscuela: '',
      puntacionBoleta: '',
      puntuacionGeneral: ''

    });
  }


}
