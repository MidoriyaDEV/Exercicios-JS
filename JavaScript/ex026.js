// </> Custo ao consumidor de um carro novo

//O custo ao consumidor de um carro novo é a soma do preço de fábrica com o percentual de lucro do distribuidor e com os impostos, 
// em que o lucro e os impostos são calculados com base no preço de fábrica Implemente um programa que receba o preço da fábrica de 
// um veículo, ο percentual de lucro do distribuidor e o percentual de imposto, nesta ordem, calcule e mostre:

// - O valor correspondente ao lucro do distribuidor,

// - O valor correspondente aos impostos.

// - O preço final do veículo






var precoFabrica = Number(prompt('Digite o preço de fábrica do produto: '));
var percentualLucro = Number(prompt('Digite o percentual de lucro do distribuidor: '));
var percentualImposto = Number(prompt('Digite o percentual de imposto: '));


var valorLucro = (precoFabrica * percentualLucro) / 100;
var valorImposto = (precoFabrica * percentualImposto) / 100;


var precoFinal = precoFabrica + valorLucro + valorImposto;


alert(valorLucro.toFixed(0) + '\n' + valorImposto.toFixed(0) + '\n' + precoFinal.toFixed(0));