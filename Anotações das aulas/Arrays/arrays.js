/* Revisão do Básico */
const nomes = ['Juliany', 'João', 'Joana', 'Maria', 'Roberto'];
nomes[3] ='José'; // adiciona um novo item
delete nomes[1]; // deleta item sem alterar as posições
console.log(nomes);


nomes.pop(); // remove o ultimo valor
nomes.shift(); // remove o primeiro valor e descola os indices
nomes.push('Nome qualquer no final'); // adiciona valores no final array
nomes.unshift('Nome qualquer no inicio'); // adiciona valores no começo da array

/* Transformar String em Array */
const nome = 'Juliany Eunice Ribeiro Eufrásio';
const meuNomeArray = nome.split(' ');
console.log(meuNomeArray);

/* Tranformar Array em String */
const frase = ['Olá', 'Mundo', '!!'];
const fraseString = frase.join(' ');
console.log(fraseString);