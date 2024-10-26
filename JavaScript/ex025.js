// </> Troca de dígitos UCD

// Implementar um programa que recebe um número de 3 digitos no formato CDU e o reescreve no formato UCD. 
// Exemplo: 123 deve ser reescrito como 312


var numero = prompt("Digite um número de 3 dígitos:");


var primeiroDigito = numero[1];
var segundoDigito = numero[0];
var terceiroDigito = numero[2];

var numeroInvertido = terceiroDigito + segundoDigito + primeiroDigito;

alert(numeroInvertido)