function podeSubir (altura,acompanhamento)
{
    if (altura<1.2)
    {
       console.log('Acesso Negado, abaixo de 1,2 metro');
    }
    if (altura>=1.2 && altura<1.4)
     {
         if (acompanhamento==true)
         {
             console.log('Acesso Permitido, altura entre 1,2 e 1,4 metro, acompanhado');
         }
         else
             {
                 console.log('Acesso Negado, altura entre 1,2 e 1,4, desacompanhado');
             }
     }
    if (altura>=1.4 && altura<2.0)
    {
        console.log('Acesso Permitido, altura entre 1,4 e 2,0 metros');
    }
    if (altura>=2.0)
    {
        console.log('Acesso Negado, altura maior que 2 metros')
    }
}
podeSubir (1.19, true)
podeSubir (1.25, true)
podeSubir (1.39, false)
podeSubir (1.45,true)
podeSubir (1.5,false)
podeSubir (2.1,true)
podeSubir (2.2,false)