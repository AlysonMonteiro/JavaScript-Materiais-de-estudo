//               -5      -4      -3        -2       -1
//                0       1       2         3        4
const nomes = ['Maria','Joõa','Eduardo','Gabriel','Júlia'];

//nomes.splice(índice atual, delete, elem1,elem2,elem3);
//Number.MAX_VALUE, é o ultimo valor disponivel
// const removidos = nomes.splice(-2, 1);
// const removidos = nomes.splice(3, 2, 'índice01', 'índice02');
//const removidos = splice(-1, 1); simula o evento do POP de remover o ultimo elemento.
//const removidos = splice(0, 1); simula o evento do SHIFT de remover o primeiro elemento.
const removidos = nomes.splice(0, 0, 'índice01'); //simula o evento do UNSHIFT de remover o primeiro elemento.
//const removidos = splice(nomes.length, 0,'indice01'); simula o evento do PUSH de remover o primeiro elemento.
console.log(nomes, removidos);