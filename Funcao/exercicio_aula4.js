function calcularMedia (med1, med2, med3) {
    return ((med1 + med2 + med3) / 3);

}
const nota1 = 10
const nota2 = 3
const nota3 = 8.9

let media = calcularMedia (nota1, nota2, nota3)
let nome = 'Pedro'

if 
    (media >= 7) {
        console.log (`Aluno aprovado: ${nome}`)
    }
else {
    console.log ('aluno reprovado')
}
 
console.log ('media do aluno:', media.toFixed(2));