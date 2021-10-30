export class Mesa {
    
    public idMesa: number;
    public escuela: string;
    public estado: string;
    // public acciones: string;
  
   
  

  constructor(nroMesa:number, estado:string, escuela:string) {
    this.idMesa = nroMesa;
    this.estado = estado;
    this.escuela = escuela;
    // this.acciones = acciones;
   
    
  }
}
