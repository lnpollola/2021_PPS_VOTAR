export class Votante {

    public DNI: string;
    public SEXO: string;
    public NOMBRE: string;
    public IDMESA: number;
    public IDESCUELA:number;
    public ORDEN:number;
    public DVALIDADOR: number;
  
 
  constructor(
      DNI:string, 
      SEXO:string, 
      NOMBRE:string, 
      IDMESA:number, 
      IDESCUELA:number,
      ORDEN:number,
      DVALIDADOR:number      
      ) {
          
      this.DNI = DNI;
      this.SEXO = SEXO;
      this.NOMBRE = NOMBRE;
      this.IDMESA = IDMESA;
      this.IDESCUELA = IDESCUELA;
      this.ORDEN = ORDEN;
      this.DVALIDADOR =  DVALIDADOR ;
  }
}
