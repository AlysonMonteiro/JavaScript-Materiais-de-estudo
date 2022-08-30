function divisor(x){
  if( typeof x !== 'number') return x;
  if ( x % 3 === 0 && x % 5 === 0) return 'FizzBuzz';
  if(x % 5 === 0) return 'Fizz';
  if(x % 3 === 0) return 'Buzz';
  

return x;
}


for( i =  0; i <= 100; i++){
    console.log(i, divisor(i));    
}

