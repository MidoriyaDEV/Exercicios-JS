// </> O quadrado ou raiz

// Vamos continuar praticando o uso do if. Nesse novo exemplo você deve implemente um programa que recebe um número real e calcula: 
// o quadrado do número, caso ele seja um número negativo, ou sua raiz quadrada, caso contrário. 
// Temos novamente duas condições. Mas agora vamos avallar elas de um forma ligeiramente diferente. 
// Existe uma estrutura chamada "else" que pode ser colocada logo abaixo de um if. O else serve para executar uma ação quando 
// a expressão no if tiver resultado falso. Usando o else você não precisa escrever um segundo if com uma expressão que seja o 
// contrário do primeiro if. Parece confuso, mais veja o exemplo abaixo Se x for maior que o vai ser impresso o texto positivo. 
// Senão for maior que 0 (else é senão em inglés), vai cair no else e nesse caso não vai acontecer nada. Mais volte para questão, 
// e lente usar o if com else para recebe um número real e calcula: o quadrado do número, caso ele seja um número negativo, 
// ou sua raiz quadrada, caso contrário

//if (x > 0){ 
//   alert("positivo")
// }else{ 

// }

var n1, calc1, calc2

n1 = Number(prompt('Digite um valor: '))
calc1 = Math.sqrt(n1)
calc2 = Math.pow(n1,2)

if( n1 > 0){
    alert(calc1)
}else{
    alert(calc2)
}