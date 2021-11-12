export class Mesa {
    
    public idMesa: number;
    public escuela: string;
    public estado: string;
    public validofiscal: boolean;
    public validopresidente: boolean;

  constructor(nroMesa:number, estado:string, escuela:string) {
    this.idMesa = nroMesa;
    this.estado = estado;
    this.escuela = escuela;
    this.validofiscal = false;
    this.validopresidente = false; 

  }
}
