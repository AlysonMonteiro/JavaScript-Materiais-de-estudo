const verdadeira = true;

//let tem escopo de bloco{... bloco}
//Var só tem escopo de função

// let nome = 'luiz'; // criando
// var nome2 = 'luiz';// criando

// var nome2 = 'otavio'; //redeclarada
// if (verdadeira) {
//   let nome = "otavio"; // criando
//   var nome2 = "pedro"; // redeclarando
//   console.log(nome, nome2);

//   if (verdadeira) {
//     let nome = "outra coisa";
//     var nome2 = "andre"; // redeclarando
// }
// }
// console.log(nome, nome2);


var sobrenome = 'monteiro';

function falaOi(){
    console.log(sobrenome);
}

falaOi();''