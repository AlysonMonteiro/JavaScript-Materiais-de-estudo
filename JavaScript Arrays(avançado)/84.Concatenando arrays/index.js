const a1 = [ 1, 2, 3];
const a2 = [ 4, 5, 6];
const a3 = a1.concat(a2,[7 ,8 ,9 ], 'pedra');
console.log(a3);
//... rest ... spread, nesse caso é o spread 
const a4 = [...a1, ...a2, 'luiz', ...[10, 11, 12]];
console.log(a4);