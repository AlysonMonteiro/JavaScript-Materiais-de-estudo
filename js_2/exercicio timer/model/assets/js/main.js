const relogio = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const reiniciar = document.querySelector('.Reiniciar');
let segundos = 0;
let timer;
function criaHoraDosSegundos(segundos){
   const data = new Date(segundos * 1000);

   return data.toLocaleTimeString('pt-BR',{
      hour12:false,
      timeZone: 'GMT'
   });

}

document.addEventListener('click', function(e){
   const el = e.target;

   if(el.classList.contains('iniciar')){
      relogio.classList.remove('pausado');
      clearInterval(timer);
       iniciaRelogio();
   }
   if(el.classList.contains('pausar')){
      clearInterval(timer);
      relogio.classList.add('pausado');
   }
   if(el.classList.contains('reiniciar')){
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      segundos = 0;
   }

}

function iniciaRelogio(){
  timer = setInterval(function(){
   segundos++;
   relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
}

// iniciar.addEventListener('click', function(event){
  
// })
// pausar.addEventListener('click', function(event){
   
// })
// reiniciar.addEventListener('click', function(event){
    
// })





