/* 
> Função contrutora retorna objetos
> Usa (new) obrigatoriamente: Pessoa (new)
> Inicia com a letra maiuscula
> A palavra new cria um objeto vazio

*/ 

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': teste')
    }
}

const p1 = new Pessoa('Juliany', 'Eufrasio');
const p2 = new Pessoa('Joana', 'Eufrasio');

console.log(p1.nome);
p2.metodo();