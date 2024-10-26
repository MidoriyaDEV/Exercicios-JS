// </> Área e Volume do círculo de raio R

// Implemente um programa que recebe um valor real referente a um raio R e calcula: 
// A área do círculo de raio R, O volume da esfera de raio R. Considere Pl resultado 
// com duas casas de precisão utilizando o toFixed(). 3.14159265.Arredonde o

// A = π* R² ; V = * π * R³



var r = parseFloat(prompt('Digite o valor do raio: '));
var pi = 3.14159265;
var area = pi * Math.pow(r, 2);
var volume = (4 / 3) * pi * Math.pow(r, 3);

alert(area.toFixed(2) + " " + volume.toFixed(2));