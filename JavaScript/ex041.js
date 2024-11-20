var totalPessoas = 6; 
var contador = 0; 
var maioresDe18 = 0; 

while (contador < totalPessoas) {
    var idade = prompt("Digite sua idade: ");
    idade = parseInt(idade); 
    
    if (idade > 18) {
        maioresDe18++; 
    }
    
    contador++; 
}

alert(maioresDe18);