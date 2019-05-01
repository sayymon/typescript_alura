import { Negociacao } from './Negociacao';
import { Imprimivel } from './Imprimivel';
import { Igualavel } from './Igualavel';

export class Negociacoes implements Imprimivel,Igualavel<Negociacoes>{
    
    paraTexto(): void {
        console.log(JSON.stringify(this._negociacoes));
    }

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {

        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(negociacoes.paraArray()) == JSON.stringify(this._negociacoes)
    }    
}
