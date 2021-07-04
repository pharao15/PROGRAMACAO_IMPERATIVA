let prato=['Pipoca','Macarrão','Carne','Feijão','Brigadeiro'];
let tempoPrato=[10,8,15,12,8];

function preparo(i, tempoEscolhido)
    {   
       // console.log("indicie=",i);
       // console.log('Tempo Escolhido= ',tempoEscolhido);
       // console.log(prato[i],tempoPrato[i]);

          if (tempoEscolhido>=tempoPrato[i]*3) {console.log('KABUUM');}

          else if (tempoEscolhido >= tempoPrato[i]*2) {console.log(prato[i] + ' queimou.');}

          else if (tempoEscolhido < tempoPrato[i])
                  {
                    console.log('tempo insuficiente pra ' + prato[i]);
                  }

          else if(tempoEscolhido == undefined) {console.log('tempo indefinindo');}

          else if(tempoEscolhido==tempoPrato[i]) {console.log(prato[i] + ' pronto, Bom apetite')}

          
    }
            
function menu(escolhePrato, escolheTempo) {
    i=escolhePrato-1;

    switch (escolhePrato) {
        
        case 1:
            preparo(i,escolheTempo);
        break;

        case 2:
            preparo(i,escolheTempo);
        break;

        case 3:
            preparo(i,escolheTempo);
        break;

        case 4:
            preparo(i,escolheTempo)
        break;

        case 5:
            preparo(i,escolheTempo);
        break;    
            
        default: console.log('prato Inexistente')
        break;

    }
}



menu(1,);
menu(null,24);
menu();
//menu(3,45);
menu(4,36);
menu(5,24);
menu(3,14);
menu(4,12);

