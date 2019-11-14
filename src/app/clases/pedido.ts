import { Producto } from "./producto";

export class Pedido {

    id:string;
    idMesa:number;
    tiempoInicio:string;
    fotoMesa:string;
    detalle:Array<Producto>;
}
