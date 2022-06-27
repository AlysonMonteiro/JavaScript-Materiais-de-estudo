// CONSERTANDO O PROBLEMA DO PADRÃO IEEE 754

let num1 = 0.7;
let num2 = 0.1;

num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;

num1 = parseFloat(num1.toFixed(2));
console.log(num1);

console.log(Number.isInteger(num1));

//POSIVEL RESOLUÇÃO

num1 = ((num1 * 100) + (num2 * 100))/ 100;

