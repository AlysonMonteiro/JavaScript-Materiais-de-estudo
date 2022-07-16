/*
Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol)
*/

let nome = "luiz";
nome[0] = "r";
console.log(nome[0], nome);

//let a = 'A';
//let b = a; //Cópia
//console.log(a,b);

//a = 'outra coisa';
//console.log(a,b);

let a = [1, 2, 3];
let b = [...a];
let c = b;

a.push(4);
console.log(a, b, c);

b.pop();
console.log(a, b, c);

a.push("andre");
console.log(a, b, c);

const pessoaA = {
  nome: "pedro",
  sobrebnome: "fil",
};
const pessoaB = {...pessoaA};

pessoaA.nome = "bread";

console.log(pessoaA);
console.log(pessoaB);
