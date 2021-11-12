export class Mesa {
    
    public idMesa: number;
    public escuela: number;
    public estado: string;
    public validofiscal: boolean;
    public validopresidente: boolean;

  constructor(nroMesa:number, estado:string, escuela:number) {
    this.idMesa = nroMesa;
    this.estado = estado;
    this.escuela = escuela;
    this.validofiscal = false;
    this.validopresidente = false; 

  }
}
