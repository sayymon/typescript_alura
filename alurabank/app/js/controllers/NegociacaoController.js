class NegociacaoController {
    constructor() {
        this._negociacoesView = new NegociacoesView("#negociacoesView");
        this._mensagemView = new MensagemView("#mensagemView");
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacoes = new Negociacoes();
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.val().replace('-', '/')), parseInt(this._inputQuantidade.val()), parseInt(this._inputValor.val()));
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso!");
        console.log(this._negociacoes);
    }
}
