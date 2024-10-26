// </> Calculando expressões com raiz

// Considerando os seguintes valores para as variáveis a 15, b 4, c = 2, 
// implemente um programa que determine e exiba os valores da expressão abaixo. 
// Fique atento a precedencia de operadores: as funções de potência e a raiz são resolvidas 
// antes da multiplicação/divisão. Para o calculo da raiz quadrada use a função Math.sqrt(x), 
// onde x é um número cuja raiz quadrada será extraída. Se você fizer x = Math.sqrt(4) o resultado 
// na variável x será sempre 2.

// (- b + sqrt(b ^ 2 - 4ac))/2

var a, b, c, d, e, f, g;
a=1.5;
b=4;
c=2;
d=Math.pow(b,2);
e= 4*a*c;
f=d-e;
g=Math.sqrt(f);

console.log((-b+g)/2);
