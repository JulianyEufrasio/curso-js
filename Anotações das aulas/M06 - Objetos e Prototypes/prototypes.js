/* Prototypes */
/*
A diferença entre um método direto no objeto e um método no 
prototype do objeto, é que cada método que está dentro do objeto,
é exclusivo daquele objeto. Isso quer dizer que se eu tiver 100
objetos iguais, cada um dos 100 objetos terão o seu próprio método.

Já no prototype, o método é compartilhado por todas as instâncias do objeto, você tem apenas uma referência do método dentro do
objeto e a palavra this apontada para o objeto que estiver usando
o método.

*/
// Construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
};

// Instância 
const p1 = new Pessoa('Juliany', 'E.');
const p2 = new Pessoa('Eunice', 'R.');

console.log(p1);
console.log(p2);

/* Manipulando Prototypes */
// new Object -> Object.prototype

const objA = {
    chaveA: 'A'
};
const objB = {
    chaveB: 'B'
};
Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);