// Declaração de função
function sayHello(){
    console.log('Hii!');
}
sayHello();

// First-class obj (objetos de primeira classe), ou seja, pode tratar uma função como um dado
const nome = function(){
    console.log('Juliany')
};
nome();

function executFunc(func){
    console.log('Vou executar sua função abaixo');
    func();
}
executFunc(nome);

// Arrow function
const funcArrow = () =>{
    console.log('Sou uma arrow function');
};
funcArrow();

// Dentro de um objeto
const obj = {
    falar: function(){
        console.log('Estou falando.......');
    }
};
obj.falar();
