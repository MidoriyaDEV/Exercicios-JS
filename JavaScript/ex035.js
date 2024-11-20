var c = 0;

while (true) {
    
    var numero = parseInt(prompt("Digite um número inteiro (ou 0 para sair):"));
    
    
    if (numero === 0) {
        break;
    }
    
    
    if (numero % 3 === 0 || numero % 7 === 0) {
        c++;
    }
}
alert(c);