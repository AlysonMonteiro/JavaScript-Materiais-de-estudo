let numeroDigitado = prompt("digite um número");
const spanNumero = document.getElementById("numero");
const textoNumero = document.getElementById("texto");
numeroDigitado = Number(numeroDigitado);
const raizQuadrada = numeroDigitado ** 0.5;

spanNumero.innerHTML = numeroDigitado;
textoNumero.innerHTML += `<p>Raiz Quadrada: ${raizQuadrada}</p>`;
textoNumero.innerHTML += `<p>é inteiro: ${Number.isInteger(numeroDigitado)}</p>`;
textoNumero.innerHTML += `<p>é um NaN: ${Number.isNaN(numeroDigitado)}</p>`;
textoNumero.innerHTML += `<p>Aredondando para cima ${Math.round(numeroDigitado)}</p>`;
textoNumero.innerHTML += `<p>Aredondando para baixo ${Math.floor(numeroDigitado)}</p>`;
textoNumero.innerHTML += `<p>Duas casas decimais ${numeroDigitado.toFixed(2) } </p>`;
