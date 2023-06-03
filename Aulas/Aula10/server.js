const express = require("express")
const mongoose = require('mongoose')
const app = express()
const port = 8050
const connectionString = "mongodb+srv://admin:teste123@appdatabase.wh2xtw1.mongodb.net/" //Termo usado [string de conexão]
const Animal = require('./models/animal')

app.use(express.json())

app.get("/listar-animais", async (req, res) => {
    try{
        let animais = await Animal.find()
        return res.status(200).json(animais)
    } catch (error){
        return res.status(500).json(error)
    }
})

app.post('/adicionar-animal', async (req, res) => {
    let { nome, raca, peso } = req.body

    let animal = {
        nome,
        raca,
        peso
    }

    try{
        await Animal.create(animal)
        return res.status(201).json({ message: "Animal cadastrado com sucesso!"})

    } catch(error){
        return res.status(500).json({ message: error.message})
    }
})

mongoose.connect(connectionString, { //Conexão com o banco de dados
    dbName: "PetShop" //Propriedades do mongoose; [Nome do bando de dados]
}).then(() =>{ //Tratamento de exceptions "promessa" 
    console.log("MongoDB UP!")
    console.log(`Rodando no servidor http://localhost:${port}"`)
    app.listen(port) // Lê o que acontece nessa porta
}).catch((error) => {
    console.log(error)
})



