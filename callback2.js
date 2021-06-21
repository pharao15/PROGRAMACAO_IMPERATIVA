function andar()
{
 console.log('o carro esta andando');
};

function parar()
{
  console.log('o carro parou');
};
    function acaoCarro(callback)
{ callback();};

acaoCarro(andar);
acaoCarro(parar);