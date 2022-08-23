//especificos para elementos interaveis

//for classico = geralmente com iteraveis(array ou string)
//for in - retorna o indice ou chave (string, array ou objetos)
//for of = retorna o valor em si (iteráveis, arrays ou strings)
const nome = "123 ";

for ( let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}

for ( let indice in nome ){
    console.log(nome[indice]);
}

for( let valor of nome){
    console.log(valor);
}