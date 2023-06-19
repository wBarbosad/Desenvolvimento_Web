const express = require('express')
const mongoose = require('mongoose')
const connectString = "mongodb+srv://admin:teste123@datebase.xlucmme.mongodb.net/"
const app = express()
const port = 8050
const Lanche = require('./models/lanche')
const Bebida = require('./models/bebida')

app.use(express.json())

app.post('/cadastrar-lanche', async (req, res) => {
    let { nome, descricao, fabricante, emEstoque, publicadoEm } = req.body

    let lanche = {
        nome,
        descricao,
        fabricante,
        emEstoque,
        publicadoEm
    }
    await Lanche.create(lanche)
    return res.status(201).json(lanche)
})
app.get('/listar-lanches', async (req, res) => {
    try {
        let lanche = await Lanche.find()
        return res.status(200).json(lanche)
    } catch (error) {
        return res.status(500).json(error)
    }
})
app.post('/cadastrar-bebida', async (req, res) => {
    try {
        
        let { nome, descricao, fabricante, emEstoque, publicadoEm } = req.body

        let bebida = {
            nome,
            descricao,
            fabricante,
            emEstoque,
            publicadoEm
        }
        await Bebida.create(bebida)
        return res.status(201).json(bebida)
    } catch (error) {
        return res.status(500).json(error)
    }
})
app.get('/listar-bebidas', async (req, res) => {
    try {
        let bebida = await Bebida.find()
        return res.status(200).json(bebida)
    } catch (error) {
        return res.status(500).json(error)
    }
})
mongoose.connect(connectString, { //Faz a conexão com o banco de dados 
    dbName: "DevsBar"
}).then(() => { //Tratamento de exception.
    console.log("Conectado ao bando de dados")
    console.log(`Servidor rodando em http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})


