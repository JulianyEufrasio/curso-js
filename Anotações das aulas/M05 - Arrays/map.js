/* Função Map - Mapeando o array */
// É semelhante ao Filter mas o retorno final é diferente
// É usado para alterar valores do array

// Exemplo 1: Dobrar os valores dos numeros
const numeros = [2, 5, 25, 80, 90, 356, 57, 3, 10, 15, 3, 45, 14, 23];

const numDobro = numeros.map(valor => valor * 2);
console.log(numDobro);

/*
> Exemplo 2: Para cada elemento: 
> Retorne apenas uma string com o nome da pessoa
> Remova apenas a chave 'nome' do objeto
> Adicione uma chave id em cada objeto
*/

const pessoas = [
    {nome: 'Joana',idade: 68},
    {nome: 'Maria',idade: 23},
    {nome: 'Eduardo',idade: 55},
    {nome: 'Leticia',idade: 19},
    {nome: 'Rosana',idade: 32},
    {nome: 'Wallace',idade: 47},
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const idades = pessoas.map(obj => ({ idade: obj.idade}));
console.log(idades);

const comId = pessoas.map((obj, indice) => {
    const newObj = {...obj};
    newObj.id = indice + 1;
    return newObj;
});
console.log(comId);