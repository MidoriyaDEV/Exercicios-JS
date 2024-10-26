// </> Calculando expressões - parte 2

// Agora vamos fazer uma pequena alteração na forma da expressão. Considerando os seguintes valores para as variáveis 
// a = 1.5, c = 2, d= 3. Implemente um programa que determine e exiba o valor das seguinte expressão 
// (note que ela não tem os parenteses):

// a x c + d 

var a, c, d, resultado
a = 1.5
c = 2
d = 3

resultado = (parseFloat(a) * parseFloat(c)) + parseFloat(d)
console.log(resultado)