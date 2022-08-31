function mostraHora (){
const data = new Date();

return data.toLocaleTimeString('pt-BR',{
    hour12:false
});

}

// function funcaoDoInterval(){
//     console.log(mostraHora());
// }

const timer = setInterval(function (){
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
},4000);

setTimeout(function(){
    console.log('fim do intervalo!');
}, 8000);

