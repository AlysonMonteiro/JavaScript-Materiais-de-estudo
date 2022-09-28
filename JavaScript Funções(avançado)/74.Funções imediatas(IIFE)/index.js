// IIFE => Immediately invoked function expression

(function(idade, peso, altura){
    
    const sobrenome = 'miranda';
    const obj = {
        idade : idade,
        peso: peso,
        altura: altura
    }
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function chamaNome(){
        console.log(criaNome('andre'));
    }

    function criaPerfil(){
        console.log(`ficha ${criaNome('otavio')} ${sobrenome} ${obj.idade} ${obj.peso} ${obj.altura}`);

    }

    criaPerfil();
    chamaNome();
    
})(30, 80, 1.40);