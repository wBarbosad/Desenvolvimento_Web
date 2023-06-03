const express = require('express')
const mongoose = require('mongoose')
const app = express()
const connectionString = "mongodb+srv://admin:teste123@datebase.xlucmme.mongodb.net/" //Conexão com o banco de dados
const port = 8051
const Pedra = require('./models/pedras') //Importando o modelo de pedras criada no banco de dados!

app.use(express.json())


app.get('/listar-pedras', async (req, res) => {
    try {
        let pedras = await Pedra.find() //Procura tudo que tem no modelo "Pedra" no bando de dados e atribui a variavel Pedra
        return res.status(200).json(pedras)
    } catch (error) {
        console.log(error)
    }
})
app.post('/adicionar-pedra', async (req, res) => {
    try {
        let { nome, preco, tamanho } = req.body

        let pedras = {
            nome,
            preco,
            tamanho
        }

        await Pedra.create(pedras) //Criou um espaço para a pedra nova [acrescentou na lista do modelo Pedra no mongose]
        return res.status(201).json(pedras)
    } catch (error) {
        console.log(error)
    }
})
mongoose.connect(connectionString, {
    dbName: "Pedras"
}).then(() => {
    console.log("Conectado ao bando de dados!")
    console.log(`Servidor rondado em http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})