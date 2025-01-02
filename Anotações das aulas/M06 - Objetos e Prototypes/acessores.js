/* Getters e Setters*/
/*
    Um metodo para proteger uma propriedade
    Get = Obtem o valor
    Set = Seta o valor
*/
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Mensagem');
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Calça', 75, 3);
console.log(p1);