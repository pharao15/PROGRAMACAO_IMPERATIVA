let filmes = ["star wars", "clube da luta", "o poderoso chefão", "top gun", "interestelar"];
console.log (filmes[1]=='clube da luta'? 'confirmado clube da luta como segundo elemento': 'banco de dados corrompido');
console.log(filmes[0].toUpperCase(), filmes[1].toUpperCase(),filmes[2].toUpperCase(), filmes[3].toUpperCase(), filmes[4].toUpperCase());
let cartoons = ["toy story", "Procurando Nemo", "Kung-fu Panda", "wally", "fortnite"]
console.log(cartoons);
cartoons.pop();
function anima()
    {
        filmes.push (cartoons[0]);
        cartoons.shift()
    }
anima();
anima();
anima();
anima();
     
console.log(filmes)