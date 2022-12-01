// Pegando os valores dos imputs

const form = document.querySelector('.formulario');
const resultado = document.querySelector('.resultado');

const bntSubmit = form.querySelector('.btn-submit');


//Retirar evento submit
function getSubmit(evento){
    const nome = form.querySelector('.nome').value;
    const sobrenome = form.querySelector('.sobrenome').value;
    const idade = form.querySelector('.idade').value;
   

    // console.log(evento);
    evento.preventDefault();

    const obj = {
        nome: nome,
        sobrenome:sobrenome,
        idade: idade,
        nascimento(){
            const data = new Date();
           return  data.getFullYear() - idade;
            
        }
    }
    
    console.log(obj.nome,obj.sobrenome, obj.idade);
    resultado.innerHTML += `<p>${obj.nome} ${obj.sobrenome} ${obj.idade} ${obj.nascimento()}</p>`;

}
form.addEventListener('submit', getSubmit);






