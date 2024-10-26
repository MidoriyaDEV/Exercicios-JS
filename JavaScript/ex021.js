// </> Comissão do garçom no restaurante

// Escreva um programa que, dado o valor da conta de uma refeição realizada em um restaurante, 
// calcule a comissão do garçom (10% do valor da conta) e exiba: o subtotal, a comissão do garçom 
// e o total, todos em reais, seguindo o exemplo ao lado. Se precisar pular uma linha na impressão 
// lembre de usar "in"


var Subtotal, Comissao, Total, resultado

Subtotal = parseFloat(prompt('Digite o valor da conta: '))
Comissao = 10
Total = Subtotal * (Comissao / 100)
resultado = Subtotal + Total

alert('Subtotal: ' + Subtotal +'\nComissao: ' + Total +'\nTotal: ' + resultado)