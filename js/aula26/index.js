const tresHoras = 60 * 60 * 3 * 1000;
const data1 = new Date(0 + tresHoras);
console.log(data1.toString());

const data2 = new Date(2022, 4, 20, 19,50,59); // a, M, d, h, m, s, ms
console.log(data2.toString());

const data3 = new Date('2019-04-20 20:20:09');
console.log(data3.toString());

function zeroAEsquerda(num){
return num >= 10 ? num: `0${num}`;

}

function formataData(data){
const dia = zeroAEsquerda(data.getDate());
const mes = zeroAEsquerda(data.getMonth() + 1);
const ano = zeroAEsquerda(data.getFullYear());
const hora = zeroAEsquerda(data.getHours());
const minuto = zeroAEsquerda(data.getMinutes());
const segundo = zeroAEsquerda(data.getSeconds());

return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const data = new Date(); 
const dataBrasil = formataData(data);
console.log(dataBrasil);