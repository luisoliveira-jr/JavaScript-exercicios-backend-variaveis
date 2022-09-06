// Casos COVID-19
// 

let populacaoInicial = 1000;
let pessoasTransmissao = 4;
let dias = 7;

let populacaoFinal = populacaoInicial * (pessoasTransmissao ** (dias / 7));


console.log(`Com uma população inicial de ${populacaoInicial}, o número de casos de COVID-19 após ${dias} dias, será de ${populacaoFinal} pessoas contaminadas.`);