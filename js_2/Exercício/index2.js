function ePaisagem(x, y){
const altura = Number(x);
const largura = Number(y);

    console.log(typeof(altura));
    console.log(typeof(largura));

    if(altura < largura){
        return true;
    }else{
        return false;
    }

}

console.log(ePaisagem(1000,800));

const ePaisagem2 = (largura, altura) => largura > altura;

console.log(ePaisagem2(1920, 1080));