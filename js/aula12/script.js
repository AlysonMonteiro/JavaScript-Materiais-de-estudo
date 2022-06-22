
let confirmação = window.confirm('deseja fazer uma conta ?')

if(confirmação === true){

    num1 = window.prompt('digite um numero');
    num2 = window.prompt('digite outro numero');
    num1 = Number(num1);
    num2 = Number(num2);
    soma = num1 + num2;
    window.alert(`sua soma deu ${soma}`);
    window.alert('obrigado');

}else{

    window.alert("FODA-SE ENTÃO");
}