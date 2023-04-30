function cliente (dadosPessoais){
    console.log(`Bem-vindo(a)!\n ${dadosPessoais.nome + " " + dadosPessoais.sobrenome}, você tem ${dadosPessoais.idade} anos suas informações de contato são ${dadosPessoais.telefone[0]} endereco cadastrado ${dadosPessoais.endereco[0]}`)
}

let dados= [
    {
        nome: "Wesley",
        sobrenome: "Barbosa da Silva",
        idade: 23,
        endereco: ["Rua Brasiliam, 2980 - São Paulo"],
        telefone: [1146412423]
    }
]

cliente(dados[0])