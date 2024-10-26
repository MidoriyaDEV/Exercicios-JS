// </> Cálculo do IMC

// Agora vamos fazer nosso primeiro aplicativo de fato. Será um programa que é capaz de calcular 
// o Indice de Massa Corporal (IMC) de uma pessoa. Ele recebe na entrada a massa em quilos e a altura 
// em metros de uma pessoa. A resposta de saída deve seguir o formato exato do quadro a direita do enunciado 
// (onde está o exemplo de entrada e saida). O IMC é calculado pela fórmula abaixo

// imc = m / h²

var peso, altura, imc;
peso = parseFloat(prompt('Digite seu peso: '));
altura = parseFloat(prompt('Digite sua altura: '));

imc = peso / (altura * altura);
console.log('IMC: ' + imc);