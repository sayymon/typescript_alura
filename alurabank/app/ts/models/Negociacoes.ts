class Negociacoes{
    private _negociacoes : Array<Negociacao> = []

    paraArray() : Negociacao[]{
        return [].concat(this._negociacoes);
    }

    adiciona(negociacao : Negociacao) : void {
        this._negociacoes.push(negociacao);
    }

}