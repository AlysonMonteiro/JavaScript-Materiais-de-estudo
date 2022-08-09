const dataHtml = document.querySelector('.data');

const data = new Date();
let dataBrasil = formatarData(data);

dataHtml.innerHTML = `${dataBrasil}`;

console.log(data.toString());
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formatarData(data){

let getDia = data.getDay(); 
let getMes = data.getMonth();

const dia = zeroAEsquerda(data.getDate());
const mes = zeroAEsquerda(data.getMonth()+ 1);
const ano = zeroAEsquerda(data.getFullYear());
const hora = zeroAEsquerda(data.getHours());
const min = zeroAEsquerda(data.getMinutes());
const seg = zeroAEsquerda(data.getSeconds());


function getSemanas(getDia){
    const diasSemana = ['domingo','segunda','terça', 'quarta','quinta','sexta','sabado'];
    return diasSemana[getDia];
}

function getmesses(getMes) {
  const messes = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setendo",
    "Outubro",
    "Novembro",
    "Dezendo",
    
  ];
  return messes[getMes];
}
// switch (getMes) {
//   case 0:
//     getMes = "Janeiro";
//     break;
//   case 1:
//     getMes = "Fevereiro";
//     break;
//   case 3:
//     getMes = "Março";
//     break;
//   case 4:
//     getMes = "Abril";
//     break;
//   case 5:
//     getMes = "Maio";
//     break;
//   case 6:
//     getMes = "Junho";
//     break;
//   case 7:
//     getMes = "Julho";
//     break;
//   case 8:
//     getMes = "Agosto";
//     break;
//   case 9:
//     getMes = "Setendo";
//     break;
//   case 10:
//     getMes = "Outubro";
//     break;
//   case 11:
//     getMes = "Novembro";
//     break;
//   case 12:
//     getMes = "Dezendo";
//     break;
 
// }

// switch (getDia) {
//   case 0:
//     getDia = "domingo";
//     break;
//   case 1:
//     getDia = "segunda-feira";
//     break;
//   case 3:
//     getDia = "terça-feira";
//     break;
//   case 4:
//     getDia = "quarta-feira";
//     break;
//   case 5:
//     getDia = "quinta-feira";
//     break;
//   case 6:
//     getDia = "sexta-feira";
//     break;
//   case 7:
//     getDia = "sabado";
//     break;
// }


return `${getSemanas(getDia)}, ${dia} ${getmesses(getMes)} de ${ano} ${hora}:${min}`;

// FORMA REDUZIDA
// const h1 = document.querySelector('container-h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleDateString('pt-BR',{dataStyle: 'full', timeStyle:'short'}); 

}

