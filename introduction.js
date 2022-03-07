/* GUIA JS - INTRODUÇÃO AO JAVASCRIPT */

/* Tipos de Dados */

// String
const name = "Hello World";
// Variável para armazenar textos

// Number
const price = 10.99;
// Armazena números, podendo incluir decimais ou não.

// Boolean
const active = true;
// Armazena valores lógicos, true ou false.

// Null
const empty = null;
// Identifica a ausência de um valor.

/* Console */

console.log("Hello World");
// O console mostra mensagens no painel de inspeção do navegador e é muito útil para mostrar mensagens relevantes ou depurar a aplicação.

/* Operadores aritméticos */

console.log(10 + 10); // Soma
console.log(10 - 10); // Subtração
console.log(10 * 10); // Multiplicação
console.log(10 / 10); // Divisão
console.log(10 % 10); // Resto da divisão

/* Concatenação de strings */

// A concatenação é a junção de duas ou mais strings. Também é possível concatenar string com números e demais tipos de dados.
console.log("Hello " + "World");
// Resultado: Hello World

/* Propriedades */

// Uma propriedade armazena informação sobre uma instância de um tipo de dado.
// Por exemplo o length, armazena a quantidade de caracteres de uma string.
console.log("Hello World".length);
// Resultado: 11

/* Métodos */

// Um método é uma função que pertence a um tipo de dado.
// Por exemplo o toUpperCase, converte uma string para maiúsculas.
console.log("Hello World".toUpperCase());
// Resultado: HELLO WORLD

/* Métodos Nativos */

// O JavaScript possui métodos nativos que auxiliam na execução de tarefas. Como é o caso do Math.
console.log(Math.round(10.5));
// Resultado: 11
console.log(Math.min(10, 20, 30));
// Resultado: 10
console.log(Math.max(10, 20, 30));
// Resultado: 30
console.log(Math.floor(10.5));
// Resultado: 10
