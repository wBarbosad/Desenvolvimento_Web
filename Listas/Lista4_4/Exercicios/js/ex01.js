var contaCorrente = {
    saldo: "8",
    faturaAtual: 4,
    creditoDisponivel: 5,
    extrato: {
           Entrada: [
            {
                data: "20/04/2023",
                valor: 15
            }
           ],
           saida: [
            {
                data: "16/04/2023",
                valor: "R$ 50",
                descricao: "Padaria"
            }


           ]
    },
    exibirExtrato: true
}

if(contaCorrente.saldo>=contaCorrente.faturaAtual){
    console.log("\nVocê possui saldo para pagar a fatura atual\n")
} else {
    console.log("\nvocê não possui saldo suficiente para pagar a fatura, experimente pegar credito para conseguir pagar, imprima o valor de crédito disponível") 
}

if(contaCorrente.exibirExtrato){
    console.log(contaCorrente.extrato)
} else{
    console.log("Não imprimir extrato.")
}