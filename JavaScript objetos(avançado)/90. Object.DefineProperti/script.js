//defineProperty - defineProperties
// trava um elemento do objeto para que não sejá possivel altera-lo.

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    
    Object.defineProperty(this,'estoque', {
        enumerable: true, //mostra a chave
        value: true, // mostra o valor
        writable: false, // pode alterar sim ou não, alterar no sentido do valor da chave
        configurable: true // confugurável
    });
    // Deixando a propriédade "CONFIGURABLE" "TRUE" permite que a chave seja reconfigurada, podendo colocar valores diferentes da configuração inicial
    // ibde a segunda que sera considerada quando executada um console ou chamada o objeto.
    
    Object.defineProperty(this,'estoque', {
        enumerable:true , //mostra a chave
        value: function(){return estoque * 3}, // mostra o valor
        writable: false, // pode alterar sim ou não, alterar no sentido do valor da chave
        configurable: true // confugurável
    });

    //Object.defineProperties

    Object.defineProperties(this,{
        nome:{
            enumerable:false , //mostra a chave
            value: nome, // mostra o valor
            writable: false, // pode alterar sim ou não, alterar no sentido do valor da chave
            configurable: true // confugurável
        },
        
        preco:{
            enumerable:true , //mostra a chave
            value: preco, // mostra o valor
            writable: false, // pode alterar sim ou não, alterar no sentido do valor da chave
            configurable: true // confugurável
        }
    })

}

const p1 = new Produto('carro', '45 mil', 4);
console.log(p1.nome, p1.preco, p1.estoque());
// console.log(Object.keys(p1));
// for(let chave in p1){
//     console.log(chave);
// }