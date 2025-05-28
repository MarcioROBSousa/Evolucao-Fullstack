function calcularPorcentagem (vendidos, total) {
return (vendidos / total) * 100;

}
// chamando a função com os valores desejados
const assentosVendidos = 45;
const totalAssentos = 50;

const porcentagem = calcularPorcentagem (assentosVendidos, totalAssentos);

console.log ('Porcentagem de assentos vendidos:', porcentagem); 




function soma (num1, num2) {
    return num1 * num2;
}

let calculo = soma ( 10, 26)
console.log (calculo)



function calculos (num1, num2, num3) {
    return num1 + num2 - num3;
}

let soma = calculos (100, 359, 200)
console.log ('calculo dos números da função:',soma)



function multiplicacao (num1, num2) {
    let calculo = num1 * num2;
    console.log (calculo)
}

return (multiplicacao (10, 20));
    
