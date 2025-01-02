/* Laço de interação que está disponivel apenas para arrays */

const numeros = [2, 5, 25, 80, 90, 356, 57, 3, 10, 15, 3, 45, 14, 23];
let total = 0;

numeros.forEach((valor) => {
    total += valor;
});
console.log(total);