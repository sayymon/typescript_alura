class NegociacoesView extends View<Negociacoes>{

    template(negociacoes : Negociacoes) : string{

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${negociacoes.paraArray().map(negociacao => 
                    `
                    <tr>
                        <td>${negociacao.data_formatada}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>
                    `
                ).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>               
        `

    }

}