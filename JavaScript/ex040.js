var continuar = 1; 

while (continuar == 1) {
    var idade = prompt("Digite sua idade: "); 
    idade = parseInt(idade); 
    
    if (idade > 65) {
        alert("preferencial\n");
    } else {
        alert("normal\n");
    }
    
    
    continuar = prompt("Digite 1 para continuar ou 2 para encerrar:");
    continuar = parseInt(continuar); 
}

alert(" ");
