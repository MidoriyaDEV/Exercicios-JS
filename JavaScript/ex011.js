// </> Convertendo de metros para polegadas

// Escreva um programa que recebe um número real referente a uma medida em metros 
// e imprima esta medida em polegadas. Considere que uma polegada equivale à 0.0254 metros. 
// Na hora de imprimir a resposta siga o seguinte modelo:

// polegadas: 39 37007874015748

var metros, polegadas;
metros = prompt('Digite um valor em metros: ');

polegadas = metros / 0.0254; // converte
console.log('polegadas: ' + polegadas); 