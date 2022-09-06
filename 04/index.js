// Cálculo de juros compostos
// M = C(1 + i)^t

let capital = 1000;
let taxaJuros = 12.5;
let numeroMeses = 5;
let montante = capital * ((1 + (taxaJuros / 100)) ** numeroMeses);

console.log(`O capital de R$ ${capital} com taxa de juros de ${taxaJuros}% ao mês, após ${numeroMeses} meses, irá totalizar o  montante de R$ ${montante}`);