const express = require('express');
const mongoose = require('mongoose')
const app = express();
const port = 8050
const connectionString = "mongodb+srv://admin:teste123@datebase.xlucmme.mongodb.net"
const Funcionario = require('./models/funcionario')
const Produto = require('./models/produto');

app.use(express.json())

app.get('/listar-funcionario', async (req, res) => {
    try{
        let produto = await Funcionario.find()
        return res.status(200).json(produto)
    } catch(error){
        return res.status(500).json(error)
    }
})
app.post('/cadastrar-funcionario', async (req, res) => {
    try{
        let {nome, cargo, funcional, admitidoEm} = req.body

        let funcionario = {
            nome,
            cargo,
            funcional,
            admitidoEm
        }
        await Funcionario.create(funcionario)
        return res.status(201).json(funcionario)
    } catch(error){
        return res.status(500).json(error)
    }
})
app.get('/listar-produto', async (req, res) => {
    try{
        let produto = await Produto.find()
        return res.status(200).json(produto)
    } catch(error){
        return res.status(500).json(error)
    }
})
app.post('/cadastrar-produto', async (req, res) => {
    try{
        let {nome, descricao, valor, emEstoque, publicadoEm} =  req.body

        let produto = {
            nome,
            descricao,
            valor,
            emEstoque,
            publicadoEm
        }
        await Produto.create(produto)
        return res.status(201).json(produto)
    } catch(error){
        return res.status(400).json({error: "Erro ao adicionar produto."})
    }
})
mongoose.connect(connectionString, {
    dbName: "DevShop"
} ).then(()=>{  
    console.log("Conectado ao bando de dados")
    console.log(`Servidor rodando em http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})