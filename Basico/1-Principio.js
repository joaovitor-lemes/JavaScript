/* No caso de variáveis, utilizar o camelCase, que é a convenção de escrever 
as variáveis com a primeira letra minúscula e as subsequentes com a primeira letra maiúscula.

Ultilizar o let para declarar variáveis.
*/

let nome = "João"; // variável let eu posso alterar o valor
let idade = 27; // variável let eu posso alterar o valor

/* No caso de constantes, utilizar o camelCase, que é a convenção de escrever 
as variáveis com a primeira letra minúscula e as subsequentes com a primeira letra maiúscula.

Ultilizar o const para declarar constantes.
*/

const nomeDoMeuCachorro = "Rex"; // const eu não posso alterar o valor, além disso, devo declarar o valor da variável

console.log("meu nome é", nome, "e tenho", idade, "anos");
console.log(`o nome do meu cachorro é ${nomeDoMeuCachorro}`); // essa é uma forma de interpolar o valor da variável na string. Devo usar crases para usar a interpolação.

/* TIPOS DE VARIÁVEIS

- String: "Olá, mundo!"
- Number: 42
- Boolean: true ou false
- Array: [1, 2, 3]
- Object: { nome: "João", idade: 27 }
- Null: null
- Undefined: undefined

EXEMPLOS:

let nome = "João"; // String
let idade = 27; // Number
let isAdmin = true; // Boolean
let listaDeCompras = ["banana", "maçã", "uva"]; // Array
let usuario = { nome: "João", idade: 27 }; // Object
let nomeDoMeuCachorro = null; // Null
let indefinido; // Undefined

*/

// typeof é uma função que retorna o tipo de dado da variável
console.log(typeof(nome)); 



