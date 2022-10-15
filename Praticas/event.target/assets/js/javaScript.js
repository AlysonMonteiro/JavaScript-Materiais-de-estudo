function ColetaDeDados(){
  const tituloHtml =  document.querySelector('.title');
  const div =  document.querySelector('.div');

 this.mudaFundo = () => {
    document.addEventListener('click', event => {
      const element = event.target;
      this.backGroundBlue = () => {
        
      }
       console.log(element)
        if(element.classList.contains('div')){
            div.style.background = 'red';
        }


         ){

        }
    });
    
 };
}
    const dados = new ColetaDeDados();
    dados.mudaFundo();
