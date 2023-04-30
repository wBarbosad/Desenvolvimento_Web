let subtracao = (n1, n2) => {
    console.log(n1 - n2)
}
let multiplicao = (n1, n2) => {
    return n1 * n2
}
let divisao = (n1, n2) => {
    return n1/n2
}
let adicao = (n1, n2) => {
    return n1+n2
}

subtracao(5, 3)
let resultadoMultiplicacao = multiplicao (5, 6)
let resultadoDivisao = divisao (8, 4)
let resultadoAdicao = adicao(3, 5)

console.log(`Resultados da multiplicação, divisão e adicão = ${resultadoMultiplicacao}, ${resultadoDivisao}, ${resultadoAdicao}`)