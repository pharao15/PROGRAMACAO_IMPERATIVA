let filmes=["star wars", "clube da luta", "o poderoso chefão", "top gun", "interestelar"];

console.log(filmes[1]=='clube da luta'? 'confirmado clube da luta como segundo elemento': 'banco de dados corrompido');
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
nomeFilme='toy story'
console.log(filmes.join(' - '))
console.log(filmes.indexOf(nomeFilme));
console.log(filmes.indexOf('clube da luta'));
console.log(filmes.indexOf('run'));
function buscaFilme(nomeFilme,filmes) {
    console.log(filmes.includes(nomeFilme)==true? nomeFilme + ' ta na lista.': nomeFilme +  ' esta fora da lista!')
};
buscaFilme('wally',filmes);
buscaFilme('star wars',filmes);
buscaFilme('run', filmes);
const asiaScores=[8,10,6,9,10,6,6,8];
const euroScores=[8,10,6,8,10,6,7,9];
function compara (filmes,score1,score2)
        {
          numFilmes=filmes.length;
          numScoreA=score1.length;
          numScoreE=score2.length;
          testA=false;
          testE=false;
          if (numFilmes==numScoreA) 
             {
              testA=true;
              console.log('Número de avaliações da Ásia confere com número total de filmes.')
             }
          else 
             {console.log('Número de avaliações da Ásia difere do numero de filmes do acervo!')}

          if (numFilmes==numScoreE)
             {
              testE=true;
              console.log('Número de avaliações da Europa confere com número total de filmes.');
             }
          else {console.log('Número de avaliações da Europa difere do  número total do acervo!')}
          if (testA==false || testE==false) {console.log('Dados discrepantes; necessário reavaliar dados!')}
        }

//function comparaScore ()

compara(filmes,asiaScores,euroScores);

function comparaScores(asiaScores,euroScores) 
        { numeroScores=asiaScores.length;
          if (asiaScores.length==euroScores.length)
            {
              console.log('Número de avaliações recebidos da Ásia e Europa é compativel entre si e  ');
              console.log('considera ' + numeroScores + ' avaliações.');
            }
            
              
        }
comparaScores(asiaScores,euroScores);
