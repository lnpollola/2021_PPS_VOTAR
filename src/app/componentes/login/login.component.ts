import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {Usuario} from '../../clases/usuario';
import { MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  datacallback: string;
  public dataRespuesta:any;
  respuesta: any;
  hide: any;
  @Input () type: any;

  constructor(
      private formBuilder: FormBuilder,
      //private route: ActivatedRoute,
      private router: Router,
      // private _login: LoginService,
      private dialog: MatDialog
      //private authenticationService: AuthenticationService,
      //private alertService: AlertService
      ) {}

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
    }

    get f() { return this.loginForm.controls; }




Entrar(){ 
  
    this.submitted = true;
    this.loading = true;
    
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
   
    let datosLogin = new Usuario(this.f.username.value, this.f.password.value);

    this._login.ServiceLogin(datosLogin)
    .subscribe( data =>{


      this.respuesta = JSON.parse(data._body);

      if (this.respuesta)
      {
        localStorage.setItem('data', JSON.stringify(this.respuesta) );
        localStorage.setItem('usuario', JSON.stringify(this.respuesta.datos) );
        
        localStorage.setItem('token', JSON.stringify(this.respuesta.token) );
        this.dialog.closeAll();
        if(this.respuesta.datos.perfil =='admin')
        {
          this.router.navigate(['usuarios']); 
        }
        else
        {
          if(this.respuesta.datos.perfil =='mozo')
          {
            this.router.navigate(['menu']); 
          }
          else
          { 
            if(this.respuesta.datos.perfil =='cliente')
            {
              this.router.navigate(['cliente']); 
            }
            else
            { 
              this.router.navigate(['listado']); 
            }
          }
        }
       
      }
      else{
        alert("error");
        this.router.navigate(['home']); 
      }

     
    });
  
}

LoginSocio()
{
    this.loginForm.controls['username'].setValue('admin@gmail.com');
    this.loginForm.controls['password'].setValue('admin');
}

LoginCliente()
{
    this.loginForm.controls['username'].setValue('cliente1@gmail.com');
    this.loginForm.controls['password'].setValue('1234');
}

LoginMozo()
{
  this.loginForm.controls['username'].setValue('mozo1@gmail.com');
  this.loginForm.controls['password'].setValue('1234');
}

LoginTragos()
{
  this.loginForm.controls['username'].setValue('barra1@gmail.com');
  this.loginForm.controls['password'].setValue('1234');
}


LoginChopera()
{
  this.loginForm.controls['username'].setValue('chopera1@gmail.com');
  this.loginForm.controls['password'].setValue('1234');
}

LoginCocina()
{
  this.loginForm.controls['username'].setValue('cocina1@gmail.com');
  this.loginForm.controls['password'].setValue('1234');
}

LoginCandy()
{
  this.loginForm.controls['username'].setValue('candy1@gmail.com');
  this.loginForm.controls['password'].setValue('1234');
}




}
