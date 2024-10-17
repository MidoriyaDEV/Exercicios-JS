// </> Equivalente em dias e horas

// Escreva um programa que recebe um número inteiro de horas e imprime o 
// número equivalente em dias. Faça com que o programa apresente a parte fracionária em horas. 
// Ex.: 60 horas = 2 dias e 12 horas. Dica use o operador "%" (resto da divisão). Outra dica use função parseInt() 
// para transformar o quociente em um número inteiro.


var horasTotais = prompt("Digite o número de horas: ");

horasTotais = parseInt(horasTotais);

var dias = Math.floor(horasTotais / 24);

var horasRestantes = horasTotais % 24;

console.log(dias + " dias e " + horasRestantes + " horas");