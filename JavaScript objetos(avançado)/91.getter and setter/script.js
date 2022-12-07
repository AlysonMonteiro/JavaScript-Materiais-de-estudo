//defineProperty -> Getter e Setter
function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable:true,

        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('mensagem');
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto ('camiseta', 20, 3);
console.log(p1);


    