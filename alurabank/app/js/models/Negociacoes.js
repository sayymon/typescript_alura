class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    paraArray() {
        return [].concat(this._negociacoes);
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
}
