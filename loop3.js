// criarei uma array com numeros impares até k; mudando k, muda até onde vai a criação da tabela
let impares=[];
function enchetabela(k)
         {j=1;

          for (i=0 ; j+i<=k && k!=0; i++)
              {
               impares[i]=j+i
               j=j+1;
              }
        i=impares.length;
            }
function percorre(nomeArray) 
         {
          for (i=0 ; i<nomeArray.length ; i++)
              {
                   console.log('Elemento ' + (i+1) + " na posição " + i + " = " + nomeArray[i])
              }
            impares=[];
            
         }

function imprime(m)
         {
            console.log(' ');
            console.log('imprimindo tabela de impares até ' + m + '...' );
            if(m==0){console.log('limite fornecido igual a zero então não imprime tabela')}
         }      
m=10;
enchetabela(m);
imprime(m);
percorre(impares);

m=11;
enchetabela(m);
imprime(m);
percorre(impares);

m=1;
enchetabela(m);
imprime(m);
percorre(impares);

// 