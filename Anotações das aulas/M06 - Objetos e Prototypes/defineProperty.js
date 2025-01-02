/* defineProperty() e defineProperties() */
// define ou modifica uma propriedade de um objeto, e retorna o objeto modificado

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: true, // pode alterar o valor 
        configurable: true // configuravel (apagar, editar, etc)
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true, 
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true, 
            configurable: true
        },
    });
}

const p1 = new Produto('Calça', 75, 3);
console.log(p1);