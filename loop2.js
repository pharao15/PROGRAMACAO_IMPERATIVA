console.log('Criada uma tabela inicial com nome de flores');
console.log(' ');
flores = ['rosa','cravo', 'gerânio', 'orquidea','crisântemo', 'violeta', 'margarida', 'girassol'];
function percorre() 
         {
          for (i=0 ; i<flores.length ; i++)
              {
                   console.log('Elemento ' + (i+1) + " na posição " + i + " = " + flores[i])
              }
         }
percorre();
console.log(' ');
console.log ('Agora vamos alterar e mostrar...');
console.log(' ');
console.log ('colocando duas flores diferentes, uma no começo, outra no fim');
flores.unshift('azaleia');
flores.push('begonia');
console.log(' ');
percorre();
// pelo que entendi acho que a presença da função percorre atende os microdesafios 2 e 3, então loop2.js resolve?