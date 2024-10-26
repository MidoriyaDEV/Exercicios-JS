// </> Calculo de expressão com expoente

// Considerando os seguintes valores para as variáveis a = 1.5 b = 4 c = 2 d = 3 e = 1.2 e f = 4.3 
// implemente um programa que determine e exiba os valores da expressão abaixo. Fique atento à precedência 
// de operadores (1º multiplicação e divisão, 2º soma e subtração). Use a função Math.pow() para calcular as 
// potências. A sintaxe é: Math.pow( b, x), onde b representa um número que é a base e x representa o expoente ao 
// qual a base será elevada. Para elevar uma variável chamada b ao quadrado, use Math.pow(b, 2).

// [a + ((c + d) ^ 2)/(b ^ 2) * d] * 1/c

var a, b, c, d, e, f, g, h, i, j;
a = 1.5;
b = 4;
c = 2;
d = 3;
e = 1.2;
f = 4.3;
g = c + d;
h = Math.pow(g, 2); 
i = Math.pow(b, 2); 
j = 1 / c;

console.log((a+((h/i)*d))*j)