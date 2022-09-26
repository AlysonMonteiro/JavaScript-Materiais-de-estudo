// retunr
// retorna um valor
// termina a função
function exemploUm(){

function soma(a,b){
    return a + b;
}

console.log(soma(1,2));


}

function exemploDois(){
    document.addEventListener('click', function(){
        document.body.style.backgroundColor = 'black';
    });
}
function exemploTres(){
    function criaPessoa(nome,sobrenome){
        return{nome, sobrenome};
    }

    const p1 = criaPessoa('luiz', 'Otávio');
    const p2 = {
        nome: 'joão',
        sobrenome: 'pessoa'
    };

    console.log(typeof p1);
    console.log(typeof p2);
}

function exemploQuatro(){

    function falaFrase(comeco){
        function falaResto(resto){
            return comeco + ' '+ resto;
        }
        return falaResto;
    }

    const fala = falaFrase('olá');
    const resto = fala('mundo!');
    console.log(resto);
}

function exemploCinco(){
    
    function criaMultiplicador(multiplicador){
        //multiplicador
        return function(n){
            return n * multiplicador;
        };
    }

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(2);
const quadriplica = criaMultiplicador(2);

console.log(duplica(3));
console.log(triplica(3));
console.log(quadriplica(3));

}

exemploCinco();