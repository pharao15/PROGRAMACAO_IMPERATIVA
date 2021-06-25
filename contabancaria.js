var conta = {
    numeroConta: '257183',
    saldo: 1240.50,
    nomeTitutlar: 'Fabio Junior'

}

function deposito(quantia){
    conta.saldo+=quantia;
    return console.log('Deposito feito no valor de R$ ' +
     quantia + ' ; novo saldo = R$ ' + conta.saldo);
}

function saque(quantia)
    {
        if(quantia <= conta.saldo)
         {
         conta.saldo-=quantia;
         console.log('Saque efetuado de R$ ' + quantia 
                    + '  ; Novo saldo = R$ ' + conta.saldo);
        }
        else { console.log('Fundos Insuficientes')}
    }
deposito(3500);
saque(1200);
saque(5000);

function Conta(numeroConta,saldo,nomeTitular)
    {
        this.numeroConta=numeroConta;
        this.saldo = saldo;
        this.nomeTitular = nomeTitular;
    };

let minhaConta = new Conta('343536', 3000, 'Rodolfo Valentino')
console.log (minhaConta);
