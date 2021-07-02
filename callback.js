const somar=(num1,num2)=> num1+num2;
const subtr=(num1,num2)=> num1-num2;
const mult =(num1,num2)=> num1*num2;
const div  =(num1,num2)=> num1/num2;
const calcula=(num1,num2,opera)=> opera(num1,num2);

console.log('Soma 6 + 2 = ', calcula(6,2,somar)); // chama callback somar
console.log('Subtrai 6 - 2 = ', calcula(6,2,subtr)); /// chama callback subtr
console.log('Soma 6 * 2 = ', calcula(6,2,mult)); // chama callback mult
console.log('Soma 6 / 2 = ', calcula(6,2,div)); // chama callback div