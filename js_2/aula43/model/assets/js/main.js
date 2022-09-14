const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');



inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

 function criaBotaoApagar(li){
    li.innerText += '';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class','apagar');
    botaoApagar.setAttribute('title','Apagar esta tarefa');
    li.appenddChild(botaoApagar);
 }

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}
function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput()
    criaBotaoApagar(li);
}

btnTarefa.addEventListener('click', function(){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);

})