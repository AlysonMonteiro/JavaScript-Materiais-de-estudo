const nome = "alyson";
console.log(nome[2]);

//indice         1       2        3
const alunos = ["luiz", "maria", "joão"];
console.log(alunos);

//REMOVER SEM MEXER NO INDICES

delete alunos[1];

//REMOVER ELEMENTO DO ARRAY AO FINAL

alunos.pop();   

//REMOVER ELEMENTO DO INICIO DO ARRAY

alunos.shift();

//FARIAR O ARRAY
//o ultimo elemento não é incluso
alunos.slice(0,3);

//editar um valor
alunos[0] = 'pedro';
alunos[3] = 'mauri'
alunos[alunos.length] = "andre";
alunos[alunos.length] = "vict";

//adcionar ao final do array

alunos.push();

//ADICIONA AO INICIO DO ARRAY

alunos.unshift('betro')


//alunos[alunos.length] = "jao";

//console.log(alunos[0]);

//consultar o tamanho do array

typeof alunos;
alunos instanceof Array;

console.log(alunos.length);

