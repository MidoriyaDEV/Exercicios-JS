// </> Troca de valores entre variáveis

// Faça um programa que recebe 2 valores e os armazena em duas variáveis inteirasa e b. 
// Em seguida o programa deve efetuar a troca dos valores de forma que a variável 'a' passe a possuir o valor da variável 'b' 
// e que a variável 'b' passe a possuir o valor da variável 'a' Apresente os valores iniciais e os valores finais de a e b. Cuidado, 
// sempre que você usa x = y o valor que antes estava em x se perde e a variável passa a ter uma cópia do valor de y



var a, b;
a = parseInt(prompt('Digite um valor: '));
b = parseInt(prompt('Digite outro valor: '));

alert('Inicial: ' + a + ' ' + b + '\nFinal: ' + b + ' ' + a);