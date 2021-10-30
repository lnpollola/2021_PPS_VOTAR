export class Escuela {
    public idEscuela: number;
    public direccion: string;
    public distrito: string;
    public nombre: string;
    public estado: string;

    constructor(nroEscuela:number, direccion:string, distrito:string, nombre:string , estado:string ) {
        this.idEscuela = nroEscuela;
        this.direccion = direccion;
        this.distrito = distrito; 
        this.nombre = nombre;
        this.estado = estado;
      }

}
