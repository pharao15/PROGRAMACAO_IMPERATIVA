var a,b;
var nome, sobrenome;
function soma (a,b) {return a + b;};
function fazerSorvete(quantidade){return "choco ".repeat(quantidade)};
function bemVindo(nome = 'visitante', sobrenome = 'anônimo') {return 'Olá, ' + nome + " " + sobrenome;}
let fazerSushi=function(quantidade){return "sushi ".repeat(quantidade)};
function fazerSorbet() { return 'feito com água';}
function fazerSorv(){return 'ICECREAM';}
pote=fazerSorv();
a=15;
b=20;
fazerSorv();
quantidade=5;
console.log("a = " , a  , "b = " , b)
console.log("a + b = " + soma (a,b));
b=fazerSorbet();
console.log(fazerSorvete(quantidade));
a=bemVindo();
console.log(pote);
console.log(a);
console.log(b);
function ola() {let benvindo = 'Ola, como vai ?'; return benvindo;console.log(benvindo);}
