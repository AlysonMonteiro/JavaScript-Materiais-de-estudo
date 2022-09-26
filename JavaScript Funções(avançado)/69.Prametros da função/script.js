function primeiroExemplo(){
function funcao(){ // já dentro das colcheias da função é chamada de parametros 
    let total = 0;
    for(let argumento of arguments){
        // arguments que sustenta  todos os argumentos enviados independende se tiver parametro ou não
        //arguments so funciona nesse tipo de função em arrow function não funciona
        total += argumento;
    }
    console.log(total);
}

funcao(1,2,3,4,5,6,7,8,9,10) // dentro das cocheias é chamado ARGUMENTO

}
function segundoExemplo(){

    function funcao(a,b,c,d,e,f){  
        //quando declado os parametros sem valor o JS define eles como UNDEFINED
      console.log(a,b,c,d,e,f);
    }
    
    funcao(1,2,3);    
    }

function terceiroExemplo(){

        function funcao(a , b = 2, c = 4){  
         // forma antiga de definir um valor padrão para um parametro  b = b || 0;
         //so existe uma maneira de pegar o valor padrão com um argumento passado, que é colocar seu valor como UNDEFINED 
          console.log(a + b + c);
        }
        
        funcao(2, undefined, 10);    
        }

function quartoExemplo(){

            function funcao([valor1, valor2, valor3]){  
           
              console.log(valor1, valor2,valor3);
            }
            let array = ['alyson','ceará','bom jardim']
            funcao(array);    
            }

function quintoExemplo(){
        const conta = function(operador, acumulador, ...numeros){// ... significa restOperator, ou seja pega o resto dos argumentos
            for(let numero of numeros){
                if(operador === '+') acumulador += numero;
                if(operador === '-') acumulador -= numero;
                if(operador === '/') acumulador /= numero;
                if(operador === '*') acumulador *= numero;
            }
            console.log(acumulador);
        };
        conta('+', 1 , 20,30,40,50);
    }

  
            
    function sextoExemplo(){
        const conta = function(...args){
           
            console.log(args);
        };
        conta('+', 1 , 20,30,40,50);
    }

   sextoExemplo();
    