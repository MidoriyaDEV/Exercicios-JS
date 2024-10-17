// </> calculando expressões - part 1
// faça um programa que cria um conjunto de váriaveis e considere
// ela com os seguintes valores:
// a = 1.5, c = 2, d = 3
// Implemente um programa que determine  e exiba o valor da seguinte
// expressão (lebrando de usar os parênteses)
// a x (c + d)

var a, c, d, resultado
a = 1.5
c = 2
d = 3

resultado = parseFloat(a) * ((parseFloat(c) + parseFloat(d)))
console.log(resultado)