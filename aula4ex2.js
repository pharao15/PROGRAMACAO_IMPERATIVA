function podeSubir (altura, acompanhamento)
         {
             if (altura>=2)
                {
                console.log('Acesso Negado, altura maior que 2,0 metros');
                }
                else if (altura>=1.4)
                     {
                        console.log('Acesso Permitido, altura entre 1,4 e 2,0 metros');
                     } 
                     else if (altura<1.2) 
                     {
                         console.log('Acesso Negado, altura menor que 1.2');
                     }
                     else if (acompanhamento)
                             {   console.log('Acesso Permitido, altura entre 1,2 e 1,4 metro, acompanhado');
                             }
                             else
                                 {
                            console.log('Acesso Negado, altura entre 1,2 e 1,4 metro, desacompanhado');
                                 }

        
         }
podeSubir (1.19, true);
podeSubir (1.19, false);
podeSubir (1.3, true);
podeSubir (1.3, false);
podeSubir (1.5, true);
podeSubir (1.5, false);
podeSubir (2.1, true);
podeSubir (2.1, false);