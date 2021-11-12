export class Votante {

    public dni: string;
    // public dvalidador: string;
    public flagvoto: boolean;
    public idEscuela:number;
    public idMesa: number;
    public nombre: string;
    public orden:number;
    public sexo: string;
    public validoauxiliar: boolean;
    public validovotar: boolean;
 
  constructor(
      DNI:string, 
      SEXO:string, 
      NOMBRE:string, 
      IDMESA:number, 
      IDESCUELA:number,
      ORDEN:number
      ) {
          
      this.dni = DNI; 
      // this.dvalidador = DVALIDADOR;
      this.flagvoto = false;
      this.idEscuela = IDESCUELA;
      this.idMesa = IDMESA;
      this.nombre = NOMBRE;
      this.orden = ORDEN ; 
      this.sexo = SEXO;
      this.validoauxiliar = false; 
      this.validovotar = false;

  }
}
