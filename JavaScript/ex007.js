// </> Calculando expressões - parte 3

// Você viu que a ausência de parèntesis muda a o resultado da equação. 
// Sem eles, as operações e multiplicação são resolvidas primeiro. 
// Só depois é resolvida a soma. Agora considere os seguintes valores para as variáveis 
// a = 1.5, b = 4, c = 2, d = 3. Implemente um programa que determine e exiba os valores 
// da seguinte expressão:

// a x (c+d) / b

var a, b, c, d, resultado
a = 1.5
b = 4
c = 2
d = 3

resultado = parseFloat(a) * (parseFloat(c) + parseFloat(d)) / parseFloat(b)
console.log(resultado)