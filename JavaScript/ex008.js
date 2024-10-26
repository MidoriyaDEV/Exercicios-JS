// </> Calculando expressões - parte 4

// Agora, considerando os seguintes valores para as variáveis a = 1.5 b = 4 c = 2 d = 3 e = 1.2 e f = 4.3 
// implemente um programa que determine e exiba os valores da seguinte expressão (fique atento à precedência de operadores):

// ax (c+d) / b x (e+f)

var a, b, c, d, e, f, resultado;
a = 1.5;
b = 4;
c = 2;
d = 3;
e = 1.2;
f = 4.3;

resultado = (parseFloat(a) * (parseFloat(c) + parseFloat(d))) / (parseFloat(b) * (parseFloat(e) + parseFloat(f)));
console.log(resultado);