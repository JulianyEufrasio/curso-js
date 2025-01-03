/* Polimorfismo:
    Capacidade de um objeto ou função ter diferentes comportamentos ou formas, 
    dependendo do contexto em que é utilizado 
*/

// Superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

// Métodos
Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function(){
    console.log(
        `Ag/C: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$${this.saldo.toFixed(2)}`
    );
};

// Instância
const conta1 = new Conta(1111, 2036, 100.00);
conta1.depositar(100);
conta1.sacar(20);

// Conta corrente
function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;
ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

const cc = new ContaCorrente(2222, 2037, 90.00, 100.00);
cc.depositar(100);
cc.sacar(20);

// Conta poupança
function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cp = new ContaCorrente(3333, 2038, 100.00);
cp.depositar(100);
cp.sacar(20);