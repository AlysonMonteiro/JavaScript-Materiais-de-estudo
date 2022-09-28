// quando um funções está dentro de um objeto ela é chamada de METODO
//this é quem chamar pelo objeto
//get tranforma uma função em um atributo qualquer

function criaPessoa(nome,sobrenome, altura, peso){
    return{
        nome,
        sobrenome,
        fala(assunto){
            return `${this.nome} está ${assunto}.`;
        },
         
        altura: altura,

        peso: peso,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        //setter
         set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join();
         },

        //getter
        get imc(){
            const indice = this.peso / this.altura ** 2;

            if(indice <= 30){
                console.log('fudido');
            }
            
            return indice.toFixed(2);
            
        }

    }
}

const p1 = criaPessoa('alyson', 'monteiro da silva', 1.8, 68);
console.log(p1.fala('está falando sobre JS'));
console.log(p1.imc); 
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);