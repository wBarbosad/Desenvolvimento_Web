const express = require ('express')
const app = express()   
const port = 8050
const mongoose = require("mongoose")
const connection = "mongodb+srv://admin:teste123@cluster0.9pqssat.mongodb.net/?retryWrites=true&w=majority"

const Produto = require('./models/produto') //requirindo o modelo exportando e importado aqui e dei o nome de Produto

app.use(express.json())

app.get('/', async (req, res) => {
    const produtos = await Produto.find() //find serve para buscar todos ou em casos específicos de dados do bando de dados protudo.
    return res.status(200).json({ produtos: produtos})
})

app.post('/adicionar-produto', async (req, res) => {
    try {
        const {nome, descricao, valor} = req.body //Pega o que vem do req e do body e salva na ordem;

        let produto = {
            nome,
            descricao,
            valor 
        }
        
        await Produto.create(produto) //Cria um espaço para o produto que tem as caracteristicas anteriores;
        return res.status(201).json({ message: "Produto adicionado com sucesso!" })
    } catch (error) {
        return res.status(400).json({error: "Erro ao adicionar produto."})
        
    }
})
mongoose.connect(connection, { 
    dbName: "ProdutosDB"
}).then(() => { //Then e catch precisam de uma validação antes, ao contrário de try e catch que não necessitam

    console.log("MongoDB UP!")
    console.log(`Servidor rodando http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})
