//Contrutora -> molde(classe);
function Pessoa(nome, sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.nomeCompleto = () =>{
        return this.nome + ' ' + this.sobrenome;
    }
}

//instância
const pessoa1 = new Pessoa('andre','paulo'); // Pessoa = Função Contrutora
const pessoa2 = new Pessoa('vinicius','soares'); // Pessoa = função Contrutora

console.log(pessoa1.nomeCompleto(), pessoa2.nomeCompleto());
