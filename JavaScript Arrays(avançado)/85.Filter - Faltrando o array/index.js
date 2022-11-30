 //Filter, map, reduce
 /* Filter -> Sempre retornar u array, com a mesma quantidade de elementos ou menos.
    Filter sempre cria um novo Array*/
 //retorno os números maiores que 10
 const numeros = [5,50,80, 2,10,23,45,2,4,5,67,1];
 //versão longa
 //OBS nunca retorne TRUE OU FALSE retorne a condição
 function callbackFilterLong(valor, indice, array){
    if(valor > 10){
        return true;
    }else{
        return false;
    }
 }
 function callbackFilterShort(valor) {return valor > 10}
 
 
 const numerosFiltradosLong = numeros.filter(callbackFilterLong);
 const numerosFiltradosShort = numeros.filter(callbackFilterShort);
 const numerosFiltradosMoreShort = numeros.filter(valor => valor > 10);
//  console.log(numerosFiltradosLong);
//  console.log(numerosFiltradosShort);
//  console.log(numerosFiltradosMoreShort);

 const pessoas = [
    {nome: 'luiz', idade:23},
    {nome: 'wesey', idade:71},
    {nome: 'pedrinho', idade:82},
    {nome: 'andre', idade:39},
    {nome: 'almeida', idade:40},
    {nome: 'franscisco', idade:55}
 ];
 const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
 const pessoasComMaisDeCinquenta = pessoas.filter(idade => idade.idade > 50);
 const pessoasQueTerminamComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a')); 
 console.log(pessoasComNomeGrande);
 console.log(pessoasComMaisDeCinquenta);
 console.log(pessoasQueTerminamComA);
 