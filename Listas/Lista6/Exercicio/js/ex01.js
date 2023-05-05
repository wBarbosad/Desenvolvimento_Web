function verificaNome(pessoas){
     for (let lista of pessoas){
        if((lista.nome.length + lista.sobrenome.length<=3)){
            console.log("Erro! Nome invalido, nome e sobrenome devem ser maiores que 3 caracteres")
        }
        else if((lista.nome.length + lista.sobrenome.length>50)){
            console.log("Erro! Nome invalido, nome e sobrenome devem ser menores que 50 caracteres")
        } else{
            console.log("Nome e sobrenome válidos!")
        }
     }
}
function quantidadePessoas(pessoas){
    let soma = 0
    for (let posicao = 0; posicao <= pessoas.length; posicao++) {
        soma=posicao
    }
    return soma;
}
function maiorIdade(pessoas){
    for (let lista of pessoas) {
        if(lista.idade>=18){
            console.log(`Seja bem-vindo(a)! Você se chama ${lista.nome + " "+ lista.sobrenome} - e tem ${lista.idade} anos e é maior de idade`)
        } else {
            console.log(`Seja bem-vindo(a)! Você se chama ${lista.nome + " "+lista.sobrenome} - e tem ${lista.idade} anos e não é maior de idade`)
        }
        
    }
}


let listaPessoas = [
    {
        nome: "Lionel",
        sobrenome: "Messi",
        idade: 35
    },
    {
        nome: "Cristiano",
        sobrenome: "Ronaldo",
        idade: 35
    },
    {
        nome: "Neymar",
        sobrenome: "Jr.",
        idade: 31
    },
    {
        nome: "Vinicius",
        sobrenome: "Jr.",
        idade: 22
    },
    {
        nome: "Rodrigo",
        sobrenome: "Raio",
        idade: 23
    },
    {
        nome: "Wesley",
        sobrenome: "Barbosa",
        idade: 23
    }
]
let tamanhoListaDePessoas

maiorIdade(listaPessoas)
verificaNome(listaPessoas)
tamanhoListaDePessoas = quantidadePessoas(listaPessoas)
console.log(`O número de pessoas é na lista ${tamanhoListaDePessoas}`)