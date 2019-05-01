import { Imprimivel } from "../models/Imprimivel";

export function imprime(...objeto : Imprimivel[]){
    objeto.forEach(objeto => objeto.paraTexto());
}