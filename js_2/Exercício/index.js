
//Minha solução
function maior(num1,num2){
    const numero1 = Number(num1);
    const numero2 = Number(num2);

if(numero1 > numero2){
    console.log(`numero ${numero1} é o maior`);
}else{
    console.log(`numero ${numero2} é o maior`);
}

   
}

maior(1,100);

//solução do professor

// function max(x,y){
//     if(x >y){
//         return x;
//     }else{
//         return y;
//     }
// }

// console.log(max(10,2));

function max(x,y){
    return x > y ? x: y;
}

console.log(max(10,2));

const max2 = (x, y) => x > y ? x : y ;

console.log(max2(900,3));