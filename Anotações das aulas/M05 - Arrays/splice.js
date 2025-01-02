/* Método Splice */
const nomes = ['Rita', 'Maria', 'Olivia', 'Dexter', 'Jane'];
const removidos = nomes.splice(3, 2);
console.log(nomes, removidos);


/*  
>   EXPLICAÇÃO  
>   O método splice() altera o conteúdo de uma lista, 
adicionando novos elementos enquanto remove elementos antigos.

    nomes.splice(0, 2, 'Joaquina');

    1° argumento é de qual indice vai começar e o 2° argumento é quantos
    elementos vai remover do array, os outros elementos é quais serão adicionados

    ex: nomes.splice(indice, delete, elem1, elem2, elem3);
*/