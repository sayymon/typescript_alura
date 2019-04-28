# typescript_alura
Projeto de exemplo das aulas de typescript


Instalando

sudo apt remove nodejs npm
sudo apt install nodejs npm

TypeScript

O compilador do TypeScript precisa da plataforma Node.js instalada para poder funcionar, pré-requisito fundamental para este curso. O segundo pré-requisito é o Visual Studio Code (VSCode). Como o TypeScript é uma linguagem criada pela Microsoft e o VSCode é mantido pela mesma empresa como projeto open source, este editor possui uma das melhores integrações com a linguagem TypeScript sem que o programador tenha que realizar dezenas de configurações ou instalar plugins.

o código TypeScript precisa ser traduzido/convertido para um código em ECMASCRIPT 

Versão do Node.js
É necessário no mínimo o Node.js em sua versão 6.X ou versões superiores pares!. Não instale versões ímpares do Node.js, pois não são LTS!**


Instalação Node.js no Linux (Ubuntu)
No Ubuntu, através do terminal (permissão de administrador necessária) execute o comando abaixo:

sudo apt-get install -y nodejs

TENÇÃO: em algumas distribuições Linux, pode haver um conflito de nomes quando o Node é instalado pelo apt-get. Neste caso específico, no lugar do binário ser node, ele passa a se chamar nodejs. Isso gera problemas, pois a instrução npm start não funcionará, pois ela procura o binário node e não nodejs. Para resolver no Ubuntu

sudo ln -s /usr/bin/nodejs /usr/bin/node

Como configurar o typeScript no seu projeto

Para que possamos utilizar o TypeScript precisamos da plataforma Node.js instalada. Aliás, essa plataforma já era um requisito de infraestrutura apontado no exercício obrigatório do capítulo.

É através do gerenciador de pacotes do Node.js que instalamos o TypeScript, mas primeiro, precisamos criar o arquivo package.json que nada mais é do que uma "caderneta" na qual temos registrados todos os módulos da aplicação baixados pelo npm.

Através do seu terminal favorito, vamos acessar a pasta alurabank. Dentro dela, vamos executar o comando:

npm init
Podemos teclar ENTER para todas as perguntas. No final, teremos o arquivo alurabank/package.json:

{
  "name": "alurabank",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
Agora que temos nosso arquivo criado, vamos solicitar ao npm que instale o TypeScript para nós:

npm install typescript@2.3.2 --save-dev
Dentro de instantes ele será instalado dentro da pasta alurabank/node_modules. Esse passo não é suficiente, precisamos configurar o compilador. Aliás, muitas IDE's escondem esses detalhes do desenvolvedor, mas inevitavelmente cedo ou tarde ele terá que lidar com essas configurações para poder alterar o comportamento do compilador do TypeScript. Este curso, mesmo sendo introdutório, o deixará seguro com tudo o que acontece por debaixo dos panos.

O próximo passo será renomearmos a pasta alurabank/app/js para alurabank/app/ts, inclusive vamos mudar a extensão dos arquivos app.js e Negociacao.js respectivamente para app.ts e Negociacao.ts. Afinal, a extensão .ts é aquela de todo arquivo TypeScript.

O arquivo tsconfig.json
Precisamos criar o arquivo alurabank/tsconfig.json que guardará as configurações do nosso compilador.

{
    "compilerOptions": {
        "target": "es6",
        "outDir": "app/js"
    },
    "include": [
        "app/ts/**/*"
    ]
}
Nele, indicamos em compilerOptions as configurações do compilador. No caso, indicamos que o resultado final da compilação será um código compatível com es6 e que eles ficarão dentro da pasta app/js. Por fim, em include, indicamos o local onde o compilador deve buscar seus arquivos.

Excelente, temos a configuração mínima para que nosso compilador funcione, mas como o executaremos? Uma boa prática é criarmos um script em nosso package.json que se encarregará de chamá-lo para nós através do terminal.

Vamos alterar alurabank/package.json e adicionarmos o script:

    "compile": "tsc"
Nosso package.json ficará assim:

{
  "name": "alurabank",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^2.3.2"
  }
}
Feche e abra o VSCode para que ele possa levar em consideração as configurações que realizamos no compilador.

Agora, através do terminal, ainda dentro da pasta alurabank faremos:

npm run compile
Após a conclusão do comando, veremos uma série de mensagens de erro, inclusive no próprio visual studio code veremos as mesmas mensagens em todo lugar que estiver sublinhado de vermelho. Isso significa que houve algum problema de compilação do nosso código que precisamos resolver, ou seja, alguma sintaxe não compatível com TypeScript.

tsconfig.json 

Nao permitir que gere os arquivos js quando tiver erro de compilação

"noEmitOnError": true

o VCode indicará para nós que estamos tentando acessar uma propriedade com modificador de acesso privado. Contudo, mesmo com o erro de compilação, será gerado um arquivo .js. Não queremos isso, queremos apenas arquivos .js gerados a partir de arquivos .ts sintaticamente corretos. Para isso, vamos adicionar em tsconfig.js mais uma configuração, a "noEmiteOnError":

O TypeScript é um superset da ES2015, ou seja, além de suportar os recurso da linguagem desta versão, adiciona outros. Um exemplo é o suporte ao modificador private.

Podemos automatizar o processo de compilação que será disparado toda vez que um arquivo .ts for modificado. Para isso, vamos adicionar mais um script em alurabank/package.json, o script "start": "tsc -w":

Agora, no terminal e dentro da pasta aluraback, vamos executar o comando:

npm start

tsconfig.json para adicionarmos no em seguida a configuração "noImplicitAny": true:

O TypeScript adota o tipo any implícito. O tipo any indica que a variável, propriedade, parâmetro de método ou seu retorno podem ser de qualquer tipo. Esse comportamento ajuda na migração de um código legado em JavaScript para esta linguagem. No entanto, como estamos começando um projeto do zero, podemos impedir que o TypeScript assuma implicitamente o tipo any, forçando-nos a explicitar a tipagem.

Casting no typeScript

<HTMLInputElement> document.querySelector("#data");

Exemplo de definição de Array

Array<Negociacao> = [];


Utilizando a API do DOM, podemos criar elementos dinamicamente através de document.createElement ou:

Através da propriedade innerHTML que recebe uma string que é convertida para elementos do DOM.


Os criadores da biblioteca ou terceiros podem criar um arquivo chamado TypeScript Declaration File. Este arquivo possui informações dos nomes de métodos e funções, inclusive tipos que podem ser utilizados pelo TypeScript. Quando carregado, o TypeScript conseguirá, baseado nesse arquivo, realizar checagem estática inclusive lançar mão de todos seu poder através de seu editor ou IDE favorita.

No caso, vamos instalar o tipo do jQuery. Vale lembrar que esse tipo não foi definido pela equipe do jQuery:

npm install @types/jquery@2.0.42 --save-dev
Você pode instalar o type definiton da sua biblioteca favorita, contanto que ela exista. Inclusive podem haver arquivos de definições criados por mais de um colaborador, no final, somos nós que devemos escolher o arquivo que for mais atualizado. Não há solução mágica, é necessário realizar pesquisas na Internet. Inclusive, pode ser que nem existe um arquivo tsd para sua biblioteca favorita, sendo assim, a solução com declare var continua sendo válid

Como instalar o Jquery utilizando o typescript

npm install @types/jquery@2.0.42 --save-dev

cria a pasta @typer no seu projeto

JQuery e o $ passa a ser acessavel

No npm, existe uma série de TypeScript definitons files para as mais diversas bibliotecas e frameworks do mercado. Por exemplo, se quisermos instalar o tsd do jQuery, acessamos

https://www.npmjs.com/package/@types/jquery

Para remover os comentarios dos arquivos JS de produção  "removeComments": true

TypeScript tem namespaces

Ex : 

namespace Views{

    export abstract class View<T>{

        protected _elemento : JQuery
    
        constructor(selector : string){
            this._elemento = $(selector);
        }
    
        update(model : T) : void {
            this._elemento.html(this.template(model));
        }
    
        abstract template(model: T) : string;    
    }

}

ES2015 modules

Imports removidos do index delegando o gerenciamento de dependencias

No index 

<script src="lib/system.js"></script>
<script>
     System.defaultJSExtensions = true;
    System.import('js/app.js').catch(err => console.error(err));
</script>

{
    "compilerOptions": {
        "target": "es6",
        "outDir": "alurabank/app/js",
        "noEmitOnError": true,
        "noImplicitAny": true,
        "removeComments": true,
        "module": "system"
    },
    "include": [
        "alurabank/app/ts/**/*"
    ],
    "exclude": [
        "alurabank/app/js"
    ]
}

Loaders usam XMLHttpRequest, ou seja, realizam requisições Ajax para baixar os módulos e para isso precisamos de um servidor que disponibiliza nossa aplicação para o browser.

É o responsável pelo carregamento do módulo principal da aplicação. A partir desse módulos todas as suas dependências são resolvidas dinamicamente, sem a necessidade de termos que importar cada script individualmente seguindo uma ordem de importação definida.


Como vimos, precisamos servir nossa aplicação através de um servidor web. Utilizaremos o lite-server. Além dele servir a pasta alurabanl/app para nós, ele ainda suporta livereloading através do BrowserSync que traz embutido. Isso é perfeito, pois toda vez que os arquivos .ts forem modificados e os arquivos .js gerados nosso navegador automaticamente será recarregado.


Como vimos, precisamos servir nossa aplicação através de um servidor web. Utilizaremos o lite-server. Além dele servir a pasta alurabanl/app para nós, ele ainda suporta livereloading através do BrowserSync que traz embutido. Isso é perfeito, pois toda vez que os arquivos .ts forem modificados e os arquivos .js gerados nosso navegador automaticamente será recarregado.

Dentro da pasta alurabank, vamos instalar o lite-server`:

npm install lite-server@2.3.0 --save-dev

{
  "name": "alurabank",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc",
    "start": "tsc -w",
    "server": "lite-server --baseDir=app"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jquery": "^2.0.42",
    "lite-server": "^2.3.0",
    "typescript": "^2.3.2"
  }
}

Vamos instalar o módulo concurrently. Ele nos permitirá rodar os dois scripts que criamos em paralelo nas plataformas Windows, MAC e Linux.

Dentro da pasta alurabank vamos executar o comando:

npm install concurrently@3.4.0 --save-dev

Rodando scripts paralelamente com o módulo concurrently
Vamos instalar o módulo concurrently. Ele nos permitirá rodar os dois scripts que criamos em paralelo nas plataformas Windows, MAC e Linux.

Dentro da pasta alurabank vamos executar o comando:

npm install concurrently@3.4.0 --save-dev
Agora, vamos renomear o script "start" para "watch" e adicionar novamente o script "start" que chamará o módulo concurrently:

{
  "name": "alurabank",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc",
    "watch": "tsc -w",
    "server": "lite-server --baseDir=app",
    "start": "concurrently \"npm run watch\" \"npm run server\""
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jquery": "^2.0.42",
    "concurrently": "^3.4.0",
    "lite-server": "^2.3.0",
    "typescript": "^2.3.2"
  }
}

barrel

export * from './modulo-a';
export * from './module-b';
export * from './module-c';
 
Correto. O barril não exporta nada de novo, apenas artefatos de outros módulos.


o TypeScript possui um atalho para declaração de propriedades somente leitura. Para isso, basta usarmos o modificador readonly.

export class Negociacao {

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}

    get volume() {

        return this.quantidade * this.valor;
    }
}
Veja que não foi necessário criar os getters para que pudéssemos acessar as propriedades que antes eram privadas. Agora, qualquer atribuição feita às propriedades resultarão em erro de compilação.

optional exemplo : 

export abstract class View<T> {

    protected _elemento: JQuery;
    private _escape: boolean;

   // tornando  o parâmetro opcional!
    constructor(seletor: string, escapar?: boolean) {

        this._elemento = $(seletor);
        this._escapar = escapar;
    }

Tem que ser os ultimos do contrutor

Definindo o valor default : 

export abstract class View<T> {

    protected _elemento: JQuery;
    private _escape: boolean;

   // tornando  o parâmetro opcional!
    constructor(seletor: string, escapar: boolean = false) {

        this._elemento = $(seletor);
        this._escapar = escapar;
    }

o TypeScript possui o modo strickNullChecks. Neste modo, null e undefined não fazem parte do domínio dos tipos e só podem ser atribuídos a eles mesmos. Com a exceção de undefined, que pode ser atribuído a void. Isso pode ser interessante para evitarmos valores nulos e indefinidos em nosso projeto.

Vamos ativá-lo em tsconfig.json:

"strictNullChecks": true

Podemos indicar que a função pode devolver mais de um tipo, no caso ela devolverá boolean ou null:

// deixarmos explícitos que a função pode retornar boolean ou null
function minhaFuncao(flag: boolean): boolean | null{

    let valor = null;
    if(flag) return null;
    return true;
}

let x = minhaFuncao(false);
Agora, como explicitamos que seu retorno pode ser também null, nosso código passará pelo strictNullChecks. Curiosamente, linguagens como a Golang permitem uma função ou método ter mais de um tipo de retorno.