````Javascript
 O método filter() é uma função de array que permite filtrar elementos de um array com base em uma condição específica. 
 Ele cria um novo array contendo todos os elementos do array original que atendem à condição especificada, 
sem modificar o array original.


 O método filter() em JavaScript já internamente avalia uma condição (semelhante a um "if") 
para decidir quais elementos manter no novo array e quais excluir.

 Portanto, não é necessário usar um if dentro da função de callback. 
 A própria expressão de retorno age como uma condição booleana(true e false) para
decidir se um elemento deve ser incluido ou não, respectivamente, no novo array.



 Sintaxe básica:


 arrayOriginal.filter(function(elemento, índice, array) {
  // Lógica de filtro
  return // Retorna true para manter o elemento no novo array, ou false para excluí-lo
});


//Em Arrow function ficaria assim:


 arrayOriginal.filter((elemento, índice, array) => {
  // Lógica de filtro
  return // Retorna true para manter o elemento no novo array, ou false para excluí-lo
});






````