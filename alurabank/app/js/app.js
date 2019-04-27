const negociacaoController = new NegociacaoController();
$('.form').submit(negociacaoController.adiciona.bind(negociacaoController));
