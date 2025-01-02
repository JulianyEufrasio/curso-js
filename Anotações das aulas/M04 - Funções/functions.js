// // Declaração de função
// function sayHello(){
//     console.log('Hii!');
// }
// sayHello();

// // First-class obj (objetos de primeira classe), ou seja, pode tratar uma função como um dado
// const nome = function(){
//     console.log('Juliany')
// };
// nome();

// function executFunc(func){
//     console.log('Vou executar sua função abaixo');
//     func();
// }
// executFunc(nome);

// // Arrow function
// const funcArrow = () =>{
//     console.log('Sou uma arrow function');
// };
// funcArrow();

// // Dentro de um objeto
// const obj = {
//     falar: function(){
//         console.log('Estou falando.......');
//     }
// };
// obj.falar();

/*******************************************************************/
// Return retornra um valor e encerra uma função
// function soma(a, b){
//     return a + b;
// }
// console.log(soma(5,5));


// function criaPessoa(nome, sobrenome){
//     return {nome, sobrenome};
// }
// const p1 = criaPessoa('Juliany', 'Eufrasio');

// console.log(p1);

// function falaFrase(comeco){
//     function falaResto(resto){
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// const olaMundo = falaFrase('ola');
// console.log(olaMundo('mundo'));

/*******************************************************************/
// Função de callback
// function f1(){
//     console.log('f1');
// }
// function f2(){
//     console.log('f2');
// }
// function f3(){
//     console.log('f3');
// }
// f1();
// f2();
// f3();
// console.log('ola');

/********************* */
// Factory Functions
function criaPessoa(nome, sobrenome){
    return{
        nome, sobrenome,
        fala: function(assunto){
            return `${this.nome} está ${assunto}.`;
        }
    };
}

const p1 = criaPessoa('juliany', 'eufrasio');
console.log(p1.fala('bla bla bla'));