try{
    // É executada quando não há eros
}catch(e){
   //É executada quando há erros 
}finally{
    // Sempre
}


try{
    console.log(a);
    console.log('abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('fechei o arquivo');

    try{

    }catch(e){

    }finally{

    }

}catch(e){
   console.log('tratando o erro');
}finally{
    console.log('FINALLY: Eu sempre sou executado');
}


function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('esperando instâcia de Date.')
    }

    if ( !data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12: false
    });
}
try{
const data = new Date('01-01-1980 12:35:12');
const hora = retornaHora(data);
console.log(hora);
}catch(e){
    //tratar erro
    //console.log(e);
}finally{
    console.log('tenha um bom dia ')
}