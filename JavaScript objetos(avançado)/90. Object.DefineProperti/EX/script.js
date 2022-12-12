function Produto(nome, estoque, loja, catalogo){
    this.id = getRandomInt(0, 10);
    this.nome = nome;
    this.estoque = estoque;
    this.loja = loja;
    let catalogoPrivado = catalogo;

    Object.defineProperty(this ,'loja',{
        enumerable:true,
        value: loja,
        writable: true,
        configurable: false
    });
    Object.defineProperty(this,'catalogo',{
        enumerable:true,
        configurable:true,

        get: function(){
            return catalogoPrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Formato Invalido');
            }

            catalogoPrivado = valor;
        }
    });
    }

    function getRandomArbitrary(min,max){
        return Math.random() * ( max- min  ) + min;
    }

    function getRandomInt(min,max){     
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    const p1 =  new Produto('camiseta', 3 , 'praia',6);
    const p2 =  new Produto('calça', 10,'aeroporto',9);
    p1.catalogo = 400;
    // console.log(p1);
// console.log(p1.id,p1.nome,p1.estoque, p1.loja,p1.catalogo);
// console.log(p2.id,p2.nome,p2.estoque, p2.loja,p2.catalogo);


function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('.', '');
            nome = valor
        }
    }
}


let p3 = criaProduto('sapato')
p3.nome = 'tenis.' ;
console.log(p3.nome);