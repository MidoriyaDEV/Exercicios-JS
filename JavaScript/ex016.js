// </> Fórmula de Bhaskara

// Faça um programa que calcula a fórmula de Bhaskara para os seguintes valores de a = 1 b = 8 c = - 9 
// Considere que a primeira resposta é para o valor positivo e a segunda 
// é para o valor negativo da raiz de delta.

// (- b plus/minus sqrt(b ^ 2 - 4ac)) / (2a)

var a, b, c;
a = 1;
b = 8;
c = -9;

delta = Math.pow(b,2) - 4 * a * c

var raiz1 = ((-b + Math.sqrt(delta)) / 2);
var raiz2 = ((-b - Math.sqrt(delta)) / 2);

alert(raiz1 + " " + raiz2);