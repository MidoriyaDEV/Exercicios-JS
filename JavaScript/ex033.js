// </> Menor de 3 números

// Vamos fazer um programa que que leia très valores e determine qual o menor deles. 
// Esse é um programa bem util pois permite determinar qual o menor elemento de um conjunto Você novamente vai ter que testar condições. 
// O grande problema dessa questão é como testar duas condições ao mesmo tempo. Supondo que temos 3 números chamados aqui de x, y e z. 
// Para x ser o menor dos 3 ele deve ser menor que y e menor z. Como testar duas condições ao mesmo tempo? Você pode colocar um if dentro de outro if. 
// Veja o exemplo abaixo. A linha de comando que estiver dentro do segundo if só será executada se os dois if tiverem Verdade como resultado. 
// Se você entendeu experimente agora construir o programa para descobrir o menor dentre 3

// if(x < y){
//    if(x < z){
//    }
//   }

var n1, n2, n3

n1 = Number(prompt('Digite um valor: '))
n2 = Number(prompt('Digite outro valor: '))
n3 = Number(prompt('Digite outro valor: '))
if(n1 < n2){
    if(n1 < n3){
        alert(n1)
    }
}if(n2 < n1){
    if(n2 < n3){
        alert(n2)
    }
}if(n3 < n1){
    if(n3 < n2){
        alert(n3)
    }
}
