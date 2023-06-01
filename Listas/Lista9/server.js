const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 8050
const connectionString = "mongodb+srv://admin:teste123@appdatabase.wh2xtw1.mongodb.net/"
const Bebida = require('./models/bebida')
const Lanche = require('./models/lanche')
app.use(express.json())


app.post('/cadastrar-bebida', (req, res) => {
    try {
        let = { nome, descricao, fabricante, emEstoque, publicadoEm } = req.body

        let bebida = {
            nome,
            descricao,
            fabricante,
            emEstoque,
            publicadoEm
        }
        return res.status(201).json(bebida)
    } catch (error) {
        return res.status(500).json({ message: error })
    }
})

app.get('/listar-bebidas', async (req, res) => {
    try {
        let bebida = await Bebida.find()
        return res.status(200).json(bebida)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})
app.post('/cadastrar-lanche', (req, res) => {
    try {
        let { nome, descricao, fabricante, emEstoque, publicadoEm } = req.body

        let lanche = {
            nome,
            descricao,
            fabricante,
            emEstoque,
            publicadoEm
        }
        return res.status(201).json(lanche)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})
app.get('listar-lanche', async (req, res) => {
    try {
        let lanche = await Lanche.find()
        return res.status(200).json(lanche)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

mongoose.connect(connectionString, {
    dbName: "DevsBar"
}).then(() => { //Inicializa a API. 
    console.log("Conexão com o bando de dados!")
    console.log(`Servidor rodando em http://localhost:${port}`)
    app.listen(port) //"Escuta o que acontece na porta"

}).catch((error) => { //Caso dê erro (tratamento de dados)
    console.log(error)
})