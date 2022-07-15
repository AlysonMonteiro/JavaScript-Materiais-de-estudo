const pessoa1 = {
  nome: "luiz",
  sobrenome: "miranda",
  idade: 25,

  fala() {
    console.log(`a minha idade atual é ${this.idade}`);
  },

  incrimentoIdade() {
    ++this.idade;
  },
};

pessoa1.fala();
pessoa1.incrimentoIdade();
pessoa1.fala();
pessoa1.incrimentoIdade();
pessoa1.fala();
pessoa1.incrimentoIdade();
pessoa1.fala();
pessoa1.incrimentoIdade();
pessoa1.fala();
pessoa1.incrimentoIdade();
pessoa1.fala();

function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
  };
}
const pessoa = criaPessoa("joão", "vinicius", 80);
const pessoa2 = criaPessoa("joão", "vinicius", 80);
const pessoa3 = criaPessoa("joão", "vinicius", 80);
const pessoa4 = criaPessoa("joão", "vinicius", 80);
const pessoa5 = criaPessoa("joão", "vinicius", 80);
