function soma (n1, n2){
    console.log(n1+n2)
}
function subtracao(n1, n2){
    return (n1-n2)
}
function divisao(n1, n2){
    return (n1/n2)
}
function multiplicacao(n1, n2){
    console.log(n1*n2)
}

soma(5, 6)
multiplicacao(5, 6)
let resultadoSubtracao = subtracao(5, 1)
let resultadoDivisao = divisao(6, 2)

console.log(`Resultado divisao e subtracao, respectivamente = ${resultadoDivisao}, ${resultadoSubtracao}`)