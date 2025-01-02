/* Filter - Filtrando array */

// Exemplo 01 : Retorne numeros maiores que 10
const numeros = [2, 5, 25, 80, 90, 356, 57, 3, 10, 15, 3, 45, 14, 23];
//                                            return
const numerosFiltrados = numeros.filter(valor => valor > 10 );
console.log(numerosFiltrados);

/*
> Exemplo 2: 
> Retorne as pessoas que tem o nome com 5 letras ou mais
> Retorne as pessoas com mais de 50 anos
> Retorne as pessoas cujo nome termina com 'A'
*/

const pessoas = [
    {nome: 'Joana',idade: 68},
    {nome: 'Maria',idade: 23},
    {nome: 'Eduardo',idade: 55},
    {nome: 'Leticia',idade: 19},
    {nome: 'Rosana',idade: 32},
    {nome: 'Wallace',idade: 47},
];

const nomesFiltroLength = pessoas.filter(obj => obj.nome.length >= 5);
console.log(nomesFiltroLength);

const idadeFiltro = pessoas.filter(obj => obj.idade > 50);
console.log(idadeFiltro);

const nomesFiltroA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomesFiltroA);