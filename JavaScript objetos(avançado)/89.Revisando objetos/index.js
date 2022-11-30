function primeiraParte(){
//OBJETO LITERAL
const pessoa = {
    nome:'luiz',
    sobrenome:'andre'
}

const chave = 'nome';
const chaveSecundaria = 'sobrenome';
console.log(pessoa[chave]);
console.log(pessoa['nome']);
console.log(pessoa[chaveSecundaria]);

//OBJETO CONSTRUTOR

const pessoa2 = new Object();
pessoa2.nome = 'luiz';
pessoa2.sobrenome = 'felipe';
pessoa2.idade = 21;
/*Metodo*/ pessoa2.falarNome = function(){
    return `${this.nome} está falando seu nome`;
}
/*Metodo*/ pessoa2.getDataNascimento = function(){
    const getDataAtual = new Date();
    return getDataAtual.getFullYear() - this.idade;
};


console.log(pessoa2.getDataNascimento());
console.log(pessoa2.falarNome());
delete pessoa2.nome;
// console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);
}

function segundaParte(){
//FACTORY FUNCTION
    function criaPessoa(nome,sobrenome){
        return{
            nome,
            sobrenome,
            get nomeCompleto(){
                return `${nome} ${sobrenome}`;
            }
        }
    }

    const p1 = criaPessoa('luiz', 'otavio');
    console.log(p1.nomeCompleto);




}

function terceiraParte(){

    function Pessoa(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
        Object.freeze(this);
        //return this; //this = nome = 'luiz, sobrenome: 'otavio';
    }

    /*
    p1 = (ENREREÇO DE MEMORIA) = 'VALOR';
    */
    const p1 = new Pessoa('luiz','otavio');
    
    p1.nome = 'outra coisa';
    console.log(p1.nome);

}

terceiraParte();
