import { View } from './View';

export class MensagemView extends View<string> {

    template(mensagem: string): string {

        return `<p class="alert alert-info">${mensagem}</p>`;
    }

    error(mensagem : string){
        let template = this.template_error(mensagem);
        template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
        this._elemento.html(template);
    }

    template_error(mensagem: string): string {

        return `<p class="alert alert-danger">${mensagem}</p>`;
    }

}

