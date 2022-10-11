//Funçõa construtora -> objetos
//Função fabrica -> objetos

function Pessoa(nome,sobrenome){
    //Atributos ou metodos privados
const ID = 1234;
const metodoInterno = function(){
 console.log('interno');
};

    //Atributos ou metodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ": sou um metodo");
    };
}

const p1 = new Pessoa('luiz', 'alan');
const p2 = new Pessoa('Paulo', 'andre');

console.log(p1.nome, p1.sobrenome);
console.log(p2.nome, p2.sobrenome);
p2.metodo();