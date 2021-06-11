var nomeJogador, golsJogador, precoEmDolares;
nomeJogador = "Pele"
golsJogador = 0;
precoEmDolares = 0;
function fazerGol() {
    golsJogador++;
    precoEmDolares+=  10000;
    console.log('GOL!!!!!!');
    console.log('Agora ' + nomeJogador + ' tem ' + golsJogador + " gol e vale " + 'US$ ' + precoEmDolares + '.');
}
fazerGol();
fazerGol();
fazerGol();
function hatTrick() {
    fazerGol();
    fazerGol();
    fazerGol();
    precoEmDolares=precoEmDolares * 1.1
}
hatTrick();
console.log( nomeJogador + ' fez 3 gols numa partida e agora vale US$ ' + precoEmDolares);