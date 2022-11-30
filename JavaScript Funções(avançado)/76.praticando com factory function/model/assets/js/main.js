//(1)Sempre que eu precisar referenciar uma chave do meu objeto eu preciso usar a palavra THIS
/*(2)O termo THIS é que chama o metodo, por exemplo o this do inicia é o cauculadora,
 mas o THIS da função do addEventListener é o DOCUMENT*/
/*(3)bind(this) faz com oque o THIS seja outro quando ele for inicializado,
como no exemplo do document o this da função addEventListener deixa de ser o document e passa
ser o calculadora*/
/*uma ARROW FUNCTION trava o THIS em uma ARROW FUNCTION sempre vai ser o THIS antigo mesmo se dentro dele seja colocado
um novo como por exemplo no DOCUMENT, se for feito com uma ARROW FUNCTION ele não sera mais o this da função e sim
continuará sendo o CALCULADORA()*/

function criaCalculadora(){
    return{ 
        display: document.querySelector('.display'), 
        
        
        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
            this.pressionaDelete();
        },

        pressionaDelete(){
            this.display.addEventListener('keyup', (e)=>{
                if(e.keyCode === 8){
                    this.clearDisplay();
                }
            })
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },
        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('conta inválida');    
                    return;
                }
                this.display.value = String(conta);
            }catch(e){
                alert('conta inválida');   
                return;
            }
        },
        clearDisplay(){
            this.display.value = '';

        },
        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes(){
            //THIS
            document.addEventListener('click',(e)=> {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }

                this.display.focus();
            });
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}
const calculadora =  criaCalculadora();
calculadora.inicia();
