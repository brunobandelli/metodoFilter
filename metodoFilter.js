/*
 O método filter() é uma função de array que permite filtrar elementos de um array com base em uma condição específica. 
 Ele cria um novo array contendo todos os elementos do array original que atendem à condição especificada, 
sem modificar o array original.

 O método filter() em JavaScript já internamente avalia uma condição (semelhante a um "if") 
para decidir quais elementos manter no novo array e quais excluir.

 Portanto, não é necessário usar um if dentro da função de callback. 
 A própria expressão de retorno age como uma condição booleana(true e false) para
decidir se um elemento deve ser incluido ou não, respectivamente, no novo array.
*/

//Exemplo 01
const arrayOriginal_Idades = [15,21,30,17,18,44,12,50]

function filtroMaior18(valor){
    if(valor>=18){
        return valor
    }
}

const maior = arrayOriginal_Idades.filter(filtroMaior18)

console.log(arrayOriginal_Idades)
console.log(maior)

/*-------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------------------------1")

//Exemplo 2

const menor = arrayOriginal_Idades.filter((val)=>{if(val<18){return val}})
console.log(menor)


/*-------------------------------------------------------------------------------------------*/
console.log("-------------------------------------------------------------------------------------2")

//Exemplo 3

const numeros = [10, 15, 20, 25, 30];

console.log(numeros.filter(numero => numero > 20)); 

/*-------------------------------------------------------------------------------------------*/
console.log("------------------------------------------------------------------------------------3")

//Exemplo 4

const qntdNumMaiores50 = [30, 40, 60, 70, 80];

console.log(qntdNumMaiores50.filter(numero => numero > 50).length > 0); 
// Saída: true (pois há números maiores que 50)


/*-------------------------------------------------------------------------------------------*/
console.log("-------------------------------------------------------------------------------------4")

//Exemplo 5

const pessoas = [
    { nome: "Alice", idade: 25 },
    { nome: "Bob", idade: 30 },
    { nome: "Charlie", idade: 22 },
    { nome: "David", idade: 35 }
  ];
  const maioresDe30 = pessoas.filter(function(pessoa) {
    return pessoa.idade > 30;
  });

  console.log(maioresDe30);

/*
NESTE EXEMPLO:

 Dentro da função de callback, pessoa representa cada objeto (ou pessoa) no array pessoas.
 A função compara a idade de cada pessoa (pessoa.idade) com 30, e se a idade for maior que 30, retorna true, 
indicando que essa pessoa deve ser incluída no novo array. Se a idade for igual ou menor que 30, 
a função retorna false, indicando que a pessoa não deve ser incluída.

O resultado do filter() é um novo array chamado maioresDe30 que contém apenas as pessoas que têm mais de 30 anos.
*/

/*-------------------------------------------------------------------------------------------*/
console.log("-------------------------------------------------------------------------------------5")

//Exemplo 06

const palavras = ["cachorro", "gato", "elefante", "macaco", "peixe"];
const palavrasComA = palavras.filter(palavra => palavra.includes("c"));
console.log(palavrasComA)

/*-------------------------------------------------------------------------------------------*/
console.log("-------------------------------------------------------------------------------------6")