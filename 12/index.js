// Taxa de Juros
// i = \frac{M}{C}^\frac{1}{n} - 1

let capitalInicial = 60000;
let numeroMeses = 24;
let montante = 90000;

let taxaJuros = ((montante / capitalInicial) ** (1 / numeroMeses) - 1) * 100;

console.log(`A taxa de juros é ${taxaJuros}%.`);