 // Declaração de função(Function hoisting)

 function falaOi(){
    console.log('oi');
 }

 // Firt-class objects (objetos de primeira classe)

 //Function expression
 const souUmDado = function(){
    console.log('sou um dado');
 }
 souUmDado();

 //arrow Function

 const funcaoArrow = () =>{
    console.log('Sou uma arrow function');
 }
funcaoArrow();

//Dentro de um objeto 
const obj = {
    falar: function(){
        console.log('estou falando ...');
    },
    
    escrever (){
        console.log('estou escrevendo...')
    }
}

obj.falar();
obj.escrever();