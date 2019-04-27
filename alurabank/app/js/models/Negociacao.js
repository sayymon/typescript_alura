class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        return this._data;
    }
    get data_formatada() {
        var month = this._data.getMonth() + 1;
        var day = this._data.getDate();
        var year = this._data.getFullYear();
        return `${day}/${month}/${year}`;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this.quantidade;
    }
}
