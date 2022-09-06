// Calcular a distância entre dois pontos
// d = \sqrt{(x2 - x1)^2 + (y2 - y1)^2} 

let xa = 1;
let xb = 1;
let ya = 1;
let yb = 4;

let pontoUm = (xb - xa) ** 2;
let pontoDois = (yb - ya) ** 2;

let distancia = Math.sqrt(pontoUm + pontoDois);

console.log(`A distância entre o ponto um com X1 = ${xa} e X2 = ${xb} e o ponto dois com Y1 = ${ya} e Y2 = ${yb} é de ${distancia}.`);
