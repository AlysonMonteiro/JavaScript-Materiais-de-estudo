const pessoa = {
  nome: "Pablo",
  sobrenome: "escobar",
  idade: 56,
  endereco: {
    rua: "novo velho antigo recente",
    numero: 69,
  },
};

const { nome, ...resto } = pessoa;

// const {
//   endereco: { rua: r, numero },
// } = pessoa;

console.log(nome, resto);
