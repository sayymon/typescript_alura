System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_1, MensagemView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            MensagemView = class MensagemView extends View_1.View {
                template(mensagem) {
                    return `<p class="alert alert-info">${mensagem}</p>`;
                }
                error(mensagem) {
                    let template = this.template_error(mensagem);
                    template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
                    this._elemento.html(template);
                }
                template_error(mensagem) {
                    return `<p class="alert alert-danger">${mensagem}</p>`;
                }
            };
            exports_1("MensagemView", MensagemView);
        }
    };
});
