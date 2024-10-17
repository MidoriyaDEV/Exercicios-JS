// </> Raízes de uma equação de segundo grau

// Faça um programa que recebe os coeficientes a, b e c 
// de uma equação de segundo grau e calcula suas raizes.

// f(x) = a * x² + b * x + c

var a = parseFloat(prompt("Digite o valor de a: "));
var b = parseFloat(prompt("Digite o valor de b: "));
var c = parseFloat(prompt("Digite o valor de c: "));

var delta = Math.pow(b, 2) - (4 * a * c);

var raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
var raiz2 = (-b - Math.sqrt(delta)) / (2 * a);

alert(raiz1 + " " + raiz2);
