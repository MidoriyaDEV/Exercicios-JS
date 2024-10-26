// </> Perímetro de raio R

// Implemente um programa que recebe um valor real referente a um raio R e calcula. 
// O perímetro do circulo de raio R. Considere PI = 3.14159265. Nessa questão você terá 
// que fixar as casas decimais após a virgula em apenas 2 casas. Para isso você vai usar a 
// função de impressão toFixed() Sua sintaxe é x toFixed(n), onde x é numero que você quer reduzir 
// as casas decimais en é quantidade para qual você vai reduzir. Se x = 4.45678, ao usar x.toFixed(2), 
// o valor impresso de x seria 4.45. Você deve usar o toFixed() saída, ou seja, usar ela dentro do alert() 
// preferencialmente na hora da saída, ou seja, usar ela dentro alert().

// p = 2 * pi * R

var r = parseFloat(prompt('Digite o valor do raio: '))

var pi = 3.14159265

var perimetro = 2 * pi * r

alert(perimetro.toFixed(2))

