let numerosPrimos = [3,7,11,13,17,23,31];

console.log("Variavel contem valores de numeros primos que são " + numerosPrimos);
// agora vou definir uma variavel numeros que recebe  numeros quaisquer
let numeros = [32,33,34,35,36];
console.log("Esta é a variavel numeros " + numeros);
//finalizando defino a variavel beNumaf que recebe seq1,seq2,seq1
 let beNumaf = [...numerosPrimos, ...numeros, ...numerosPrimos];
console.log("Nova variavel com cabeça, tronco e rabo: " + beNumaf);

