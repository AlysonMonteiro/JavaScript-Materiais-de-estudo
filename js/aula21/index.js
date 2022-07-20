/*
Operadores Logícos 
&& ->  AND -> E = todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO

*/

console.log(true && true);
console.log(false || true);

const usuario = "Luiz";
const senha = "123456";

const vaiLogar = usuario === "Luiz" && senha === "123456";

if (vaiLogar === true) {
  console.log("você logou");
} else {
  console.log("usuario ou senha incorretos");
}

const negação = !false;
console.log(negação);
