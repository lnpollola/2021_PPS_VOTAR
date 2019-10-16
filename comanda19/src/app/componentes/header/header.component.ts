import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';
import { Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() usuario: any;
  @Input() perfil: any;
  @Output() emiterHeader:EventEmitter<any> = new EventEmitter();

  IngresoBool:boolean;
  perfilUsuario:string;
  nombre:string;

  constructor(private dialog: MatDialog,   private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('usuario') == null )
    {
    //  console.log("no hay usuario");
      this.IngresoBool=false;
      this.nombre='';
    }
    else 
    {
      this.usuario = JSON.parse(localStorage.getItem('usuario')) ;
      this.nombre =this.usuario.usuario;
      this.IngresoBool=true;
      this.perfilUsuario = JSON.parse(localStorage.getItem('usuario')).perfil;
    }

  }

  openLoginForm(){
    // this.dialog.open(LoginComponent, {width:'300px', height:'550px'});
   
  }

  logout()
  {
    localStorage.clear();
    this.IngresoBool=false;
    this.router.navigate(['']);
    
  }

}
