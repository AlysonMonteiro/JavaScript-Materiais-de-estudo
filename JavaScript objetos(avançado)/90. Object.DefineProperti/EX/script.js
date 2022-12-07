function Produto(nome, estoque, loja){
    this.id = getRandomInt(0, 10);
    this.nome = nome;
    this.estoque = estoque;
    this.loja = loja;
    Object.defineProperty(this ,'loja',{
        enumerable:true,
        value: loja,
        writable: true,
        configurable: false
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

    const p1 =  new Produto('camiseta', 3 , 'praia');
    const p2 =  new Produto('calça', 10,'aeroporto');

console.log(p1.id,p1.nome,p1.estoque, p1.loja);
console.log(p2.id,p2.nome,p2.estoque, p2.loja);