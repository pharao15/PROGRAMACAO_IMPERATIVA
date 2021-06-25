let numerosPrimos = [3,7,11,13,17,23,31];
let numeros = [...numerosPrimos,32,33,34,35,36, ...numerosPrimos];
console.log(numeros);

//numeros = [];
numeros = [23,24,12,43,5,87,56];
//vou imprimir numeros e depois chamar a função maiorNumero que devolve 
//o menor valor;
console.log(...numeros);
function maiorNumero(numeros){
    
    return console.log(Math.min(...numeros));}

maiorNumero(numeros);


