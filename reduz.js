let numeros = [2,4,8,9,3,7];
let num = numeros.reduce(function(acumulador,numero){
    return acumulador + '-' + numero;
});
console.log(num);