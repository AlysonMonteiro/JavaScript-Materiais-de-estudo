const paragrafos = document.querySelector('.paragravos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for(let index of ps){
  index.style.backgroundColor = backgroundColorBody;
  index.style.color = 'white';
}

const arrays = ['pedra', 'agua', 'fogo', 'vento'];

for (let index of arrays){
  console.log(index);
}