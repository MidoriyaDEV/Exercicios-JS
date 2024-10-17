// </> Altura abaixo da média

// Já conseguimos fazer um programa que informa sobre uma altura acima da média. 
// Vamos agora fazer um para alertar para uma altura abaixo da média. A estatura média do Brasil 
// é 1.73. Para uma altura abaixo da média seria uma inequação como está (altura<1.73). Para tomar a 
// decisão no código use a estrutura if

var altura

altura = Number(prompt('Digite sua altura: '));

if(altura < 1.73){
    alert('Abaixo da media');
}