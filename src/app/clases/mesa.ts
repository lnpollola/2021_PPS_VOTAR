export class Mesa {
    
    public idMesa: number;
    public estado: string;
    public acciones: string;
  
   
  

  constructor(nroMesa:number, estado:string, acciones:string) {
    this.idMesa = nroMesa;
    this.estado = estado;
    this.acciones = acciones;
   
    
  }
}
