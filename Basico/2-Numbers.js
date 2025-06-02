//IEEE 754-2008

let num1 = 0.7;
let num2 = 0.1;

/*
Tomar cuidado com a aritmética de ponto flutuante, pois pode haver erros de arredondamento.
Para evitar isso, podemos usar o método Number ou parseFloat para converter o resultado em um número.

*/

console.log(Number(num1 + num2).toFixed(2)); // toFixed define quantidade de casas decimais

console.log(Number.isInteger(num1));

