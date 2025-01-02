/* Reduce - Reduzindo o array */

// Exemplo 1: Some todos os numeros
const numeros = [2, 5, 25, 80, 90, 356, 57, 3, 10, 15, 3, 45, 14, 23];

const total = numeros.reduce((acumuldor, valor) => {
    acumuldor += valor;
    return acumuldor;
}, 0);
console.log(total);