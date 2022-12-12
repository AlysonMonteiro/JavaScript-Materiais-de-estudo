//Objeto é passado por referencia ou seja apontando para o mesmo local da memoria.
// spread operator faz uma copia do objeto
const produto = {nome:'caneca', preco:1.80};
const outraCoisa = {
    ... produto,
    material: 'porcelana'
}; //{... OBJETO} SPREAD OPERATOR
produto.nome = 'outra coisa'; 
// console.log(outraCoisa);
// console.log(produto);

//Object.assing (faz mesmo trabalho que o spread operator)

const produto2 = {nome:'produto2', preco:10};
const copiaProduto2 = Object.assign({},produto2,{material:'couro'});
// console.log(produto2);
// console.log(copiaProduto2);

//Object.keys mostra as chaves do objeto
const produto3 = {nome: 'produto', valor:10,tamanho: '20cm'};
const mostraChave = Object.keys(produto3);
// console.log(mostraChave);

// Object.freeze trva o objeto não podendo ser alterado

//Object.getOwnPropertyDescriptor() mostra as propriedades do objeto
Object.defineProperty(produto2,'nome',{
    writable:false,
    value:'pedrada',
    configurable:false
})
// console.log(Object.getOwnPropertyDescriptor(produto2,'nome'));

//Object.values mostra apenas o valor das propriedades

// console.log(Object.values(produto2));

//Object.entries() mostra chave e valor da propiedade;

// console.log(Object.entries(produto3));

for(let [chave,valor] of Object.entries(produto3)){
    // console.log(chave, valor);
};





