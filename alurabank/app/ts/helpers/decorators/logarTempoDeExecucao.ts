export function logarTempoDeExecucao(emSegundos: boolean = false){

    return function(target : any, propertyKey : string, descriptor : PropertyDescriptor){
        const metodoOriginal = descriptor.value
        
        descriptor.value = function(...args : any[]){

            let divisor = 1;
            let unidade = 'milisegundos'
            if(emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }

            console.log('-----------------------')
            console.log(`Parâmetros do método ${propertyKey}: ${JSON.stringify(args)}`);
            const tempo_inicio = performance.now();
            const resultado = metodoOriginal.apply(this, args);
            console.log(`Resultado do método: ${JSON.stringify(resultado)}` )

            const tempo_fim = performance.now();
            console.log(`Tempo de execução do metodo ${propertyKey} foi ${(tempo_fim - tempo_inicio)/divisor} ${unidade}`);
            return resultado;
        }
    }
}