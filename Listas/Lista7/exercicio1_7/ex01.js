let express = require ('express')
let app = express()
let porta = 5000

let usuarios = [
    {
        nomeUsuario: "Dabliu",
        criadoEm: "13/07/2018",
        idade: 23,
        email: "dabliu@hotmail.com",
        isAdmin: true,
        telefone: ["11 95833 4877", "17 98648 2566"],
        endereco: ["Rua Santana - SP"]
    },
    {
        nomeUsuario: "Mano Brown",
        criadoEm: "14/03/2016",
        idade: 53,
        email: "RacionaisMC@gmail.com",
        isAdmin: true,
        telefone: ["11 95843 1237"],
        endereco: ["Rua Osasco - SP"]
    },
    {
        nomeUsuario: "Batata",
        criadoEm: "13/07/2017",
        idade: 40,
        email: "srBatata@hotmail.com",
        isAdmin: false,
        telefone: ["11 95833 1596", "11 96548 3286"],
        endereco: ["Rua Miranda - SP"]
    },
    {
        nomeUsuario: "Mel",
        criadoEm: "11/08/2016",
        idade: 24,
        email: "meltaz@hotmail.com",
        isAdmin: true,
        telefone: ["11 95664 4877", "11 4641 2526"],
        endereco: ["Rua America - SP"]
    },
    {
        nomeUsuario: "Ghost",
        criadoEm: "23/04/2018",
        idade: 33,
        email: "gwd@hotmail.com",
        isAdmin: true,
        telefone: ["11 95833 4877", "17 98648 2566"],
        endereco: ["Rua Santana - SP"]
    }
]
let produtos = [
    {
        nomeProduto: "Sabonete",
        descricao: "O perfume de rosas",
        valor: 2.39,
        criadoEm: "08/05/2023",
        emEstoque: true
    },
    {
        nomeProduto: "Shampoo - Clear men",
        descricao: "Do CR7",
        valor: 24.39,
        criadoEm: "08/05/2023",
        emEstoque: true
    },
    {
        nomeProduto: "Papel higienico",
        descricao: "Folha dupla, Macia, 30 unidades",
        valor: 90.39,
        criadoEm: "08/05/2023",
        emEstoque: true
    },
    {
        nomeProduto: "Pão francês",
        descricao: "Pão quentinho e macio, 5 unidades",
        valor: 3.39,
        criadoEm: "08/05/2023",
        emEstoque: true
    },
    {
        nomeProduto: "Tomate",
        descricao: "O maior tomate do mercado, vermelho e rico em proteína - por kg",
        valor: 1.39,
        criadoEm: "08/05/2023",
        emEstoque: true
    },
]


//(Criar as rotas)
app.get("/usuarios", function(req, res){
    return res.send(usuarios)
})

app.get("/produtos", function(req, res){
    return res.send(produtos)
})

app.listen(porta, function(){
    console.log(`Rodando o servidor em: http://localhost:${porta}`)
})