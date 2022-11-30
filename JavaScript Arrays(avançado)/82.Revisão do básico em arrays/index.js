

//const nome = ['eduardo', 'maria', 'pedro'];
// const nomes = new Array('eduardo', 'maria','joana');
// nomes[2] = 'joão';
// delete nomes[2];
// console.log(nomes);

//valor por referencia
/*mesmo que o novo que tenho sido alterado ele aponta para a variavel nomes por conta disso
nomes que foi alterado */
//utilizando o spread operator é possivel fazer a copia do Array
const nomes = ['eduardo','maria','joão'];
const novo = nomes;

novo.pop();
// console.log(nomes);

const nomes2 = ['joão', 'andre', 'vinicios'];
const novo2 = [...nomes2];
//nome2.pop() remove o ultimo elemento, e ela retorna o elemento removivel.
//nome2.shift() remove o primeiro elemento mas desloca todos elementos, e ela retorna o elemento removivel.
//nome2.push() adiciona um elemento ao final do Array.
//nome2.unshift() adiciona um elemento ao inicio do Array mas desloca os elementos.
//nome2.slice(1, -2) fatia o array, o primeiro parametro é o inicio e o segundo o final, sendo também possivel trabalhar com valores negativos
//nome2.split(' ') tranforma uma string em um arrays, no parametro vc coloca oque separa as palavras podendo ser um espaço, uma virgula ou um ponto
//nome2.join(' ') tranforma um Array em uma string, no parametro vc coloca oque separará as palavras podendo ser um espaço, uma virgula ou um ponto.
const removido = nomes2.pop();
console.log(nomes2.length);
console.log(nomes2, removido);
console.log(novo2);