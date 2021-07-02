function fullName(nome,sobrenome)
    {
        return nome + ' ' + sobrenome;
    }

function bomDia(nome,sobrenome,callback)
    {
        return 'Bom dia, ' + callback(nome,sobrenome);
    }

console.log(bomDia('Fabio','Gomide',fullName));