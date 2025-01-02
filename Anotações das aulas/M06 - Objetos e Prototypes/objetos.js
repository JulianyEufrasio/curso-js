/* Revisando Objetos */

// **************
// Objeto literal
const objeto = {
    chave: 'Chave do objeto',
    chave2: 'Chave do objeto'
};
// Maneiras de acessar as chaves de um objeto
console.log(objeto.chave);
console.log(objeto['chave']);

const chaveDinamica = 'chave';
console.log(objeto[chaveDinamica]);

// ************************************
// Criar um objeto usando um construtor
const pessoa = new Object();
pessoa.nome = 'Juliany';
pessoa.sobrenome = 'Eufrásio';
// um objeto pode ter metodos internos
pessoa.falarNome = function(){
    return (`${this.nome} está falando seu nome`);
}
console.log(pessoa.falarNome());

// *****************
// Factory functions
function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Juliany', 'Eufrásio');
console.log(p1.nomeCompleto());

// ********************
// Constructor functions
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// a palavra new cria um obj vazio e atrela o this a este obj
const p2 = new Pessoa('Juliany', 'Eufrásio');
console.log(p2);