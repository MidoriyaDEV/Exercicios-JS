// </> Separando em Dezena e Unidade

// Fazer um programa para:

// 1 - Ler, via teclado, um número inteiro Assuma que o usuário vai digitar um número entre 10 e 99

// 2 - Imprimir no monitor os dígitos deste número (1 dígito em cada linha), Exemplo: Se o usuário digitar 29, imprimir 29


var numero, PrimeiroDigito, SegundoDigito;

numero = parseInt(prompt('Digite um número entre 10 a 99: '))

PrimeiroDigito = Math.floor(numero / 10);
SegundoDigito = numero % 10;

alert(+ PrimeiroDigito + '\n' + SegundoDigito)