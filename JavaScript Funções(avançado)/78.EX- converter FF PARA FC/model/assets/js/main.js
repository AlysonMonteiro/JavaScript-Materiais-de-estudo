function Calculadora(){
    this.display = document.querySelector('.display');

    this.inicia = () =>{
        this.capturaClique();
        this.pressionaEnter();
        this.pressionaDelete();
    };

    this.pressionaDelete =() => {
        this.display.addEventListener('keyup',(event) => { 
            if(event.keyCode === 8){
                this.clearDisplay();
            }
        })
    };

    this.pressionaEnter = () =>{
        this.display.addEventListener('keyup', (event)=>{
            if(event.keyCode === 13){
                this.fazConta();
            }
        })
    };
    
    this.clearDisplay = () =>{
        this.display.value = '';
    };
    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0,-1);
    };
    this.fazConta = () =>{
        let conta = this.display.value;

        try{
            conta = eval(conta);

            this.display.value = String(conta);
        }catch{
            alert('conta invalida');
        }

    };

    this.capturaClique = () =>{
        document.addEventListener('click', (event) => {
            const el = event.target;
            
            if(el.classList.contains("btn-num")){
                this.btnParaDisplay(el.innerText);
            }

            if(el.classList.contains('btn-clear')){
                this.clearDisplay();
            }
            if(el.classList.contains('btn-del')){
                this.apagaUm();
            }
            if(el.classList.contains('btn-eq')){
                this.fazConta();
            }

            this.display.focus();
        })

       this.btnParaDisplay = (valor) => {
            this.display.value += valor;
        };
    };
}

const criaCalculadora = new Calculadora();
criaCalculadora.inicia();