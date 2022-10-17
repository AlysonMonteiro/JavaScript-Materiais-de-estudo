// Essa função contrutora é um molde
function Calculadora(){
    this.display = document.querySelector('.display');
    
    this.inicia = () => {
        this.capturaEnter();    
        this.capturaClique();
    };

    this.capturaEnter = () =>{
        document.addEventListener('keyup', event => {
            if (event.keycode === 13) this.conta();
        })
    };
    this.capturaClique = () => {
        document.addEventListener('click', (event)=>{
            const element = event.target;

            if(element.classList.contains('btn-num'))  this.addNumDisplay(element);
            if(element.classList.contains('btn-clear'))  this.clear();
            if(element.classList.contains('btn-del'))  this.delete();
            if(element.classList.contains('btn-eq'))  this.conta();

        })
    };
    this.addNumDisplay = element =>{
     this.display.value += element.innerText;
     this.display.focus();
    }
    this.clear = () => this.display.value = '';
    this.delete = () => this.display.value = this.display.value.slice(0,-1);
    this.conta = () => {
        try{
            const conta = eval(this.display.value);

            if(!conta){
                alert('conta invalida');
                return
            }

            this.display.value = conta;
        }catch{
            alert('conta invalida');
            return;
        }
    }
    


}

//Objeto de calculadora
const criaCalculadora = new Calculadora();
criaCalculadora.inicia();