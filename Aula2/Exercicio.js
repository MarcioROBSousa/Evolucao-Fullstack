//Você é responsável pela venda de ingressos para uma viagem de férias de ônibus. O ônibus tem 50
//lugares disponíveis, e cada ingresso custa R$ 100,00. Você precisa criar um programa que:
//1. Mostre o número total de lugares disponíveis no início.
//2. Calcule quantos lugares restam após vender 10 ingressos.
//3. Calcule o total arrecadado com a venda desses 10 ingressos.
//4. Exiba os resultados no terminal.

let acentosTotal = 50
let acentosVendidos = 10
let valorPassagem = 100

console.log ('Total de acentos no ônibus:', acentosTotal)
console.log ('Acentos que não foram arrecadado:', acentosTotal - acentosVendidos)
console.log ('Valor total vendido: R$', valorPassagem * acentosVendidos )
console.log ('acentos vendidos:', acentosVendidos)


//Melhor forma de fazer os calculos
let assentosTotal = 50
let assentosVendidos = 10

const assentosNaoVendidos = assentosTotal - assentosVendidos
const valorTotalVendidos = assentosVendidos * valorPassagem

console.log ('Total de assentos no ônibus:', assentosTotal)
console.log ('Assentos que não foram vendidos:', assentosNaoVendidos)
console.log ('Valor total vendido: R$', valorTotalVendidos )
console.log ('assentos vendidos:', assentosVendidos)
