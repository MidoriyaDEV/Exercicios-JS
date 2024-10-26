// </> Convertendo pés, jardas e milhas.

// Escreva um programa que recebe um número real referente a uma medida em metros e 
// imprima esta medida em pés, jardas e milhas. Considere que um pé equivale à 0,3048 metros, 
// Uma jarda equivale à 0.9144 metros; Uma milha equivale à 1604.38 metros. Nessa questão, você deverá 
// imprimir uma resposta de saida abaixo da outra. Para isso, use o comando +"\n" dentro do alert(), 
// exatamente no final do texto que você vai escrever. Por exemplo alert("alo mundo"+"\n"); que vai exibir 
// a frase seguida de um pulo de linha, tal como o efeito do ENTER

var metros, pes, jardas, milhas; 

metros = prompt('Digite um valor em metros: ')
pes = metros / 0.3048
jardas = metros / 0.9144
milhas = metros / 1604.38

alert('pes: ' + pes + '\njardas: ' + jardas + '\nmilhas: ' + milhas);