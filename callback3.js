function fullName(nome,sobrenome)
    {
        return nome + ' ' + sobrenome;
    }

function iniciais(nome,sobrenome)
    {
        return nome[0]  + sobrenome[0];
    }

function bomDia(nome,sobrenome,callback)
    {
        return 'Bom dia, ' + callback(nome,sobrenome);
    }

console.log(bomDia('Fabio','Gomide',fullName));
console.log(bomDia('Fabio','Gomide',iniciais))