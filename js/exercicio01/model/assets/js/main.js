const formulario = document.querySelector(".formulario");
const peso = formulario.querySelector(".peso").value;
const altura = formulario.querySelector(".altura").value;
const calculo = document.querySelector(".calc");
const IMC = (peso / altura) * altura;

const valorPeso = peso.value;
const valorAltura = altura.value;


function retirarSubmit(evento) {
  evento.preventDefault();
}

formulario.addEventListener("submit", retirarSubmit);
