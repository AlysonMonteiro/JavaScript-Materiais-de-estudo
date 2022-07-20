/*
&& -> false && true = false "o valor mesmo"
|| -> true || false -> vai retornar o valor real

FALSY
*FALSE(valor literal de falso)
0
''"" ``(string vazia é avaliada com false)
null / undefined
NaN
*/

console.log('luiz' && true && 'maria');

function falaOi (){
    return 'oi';
}

let vaiExecutar = 'false'; 

console.log(vaiExecutar && falaOi());

console.log(0 || false || null || 'alyson' || true);

/*EXEMPLO*/
const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

