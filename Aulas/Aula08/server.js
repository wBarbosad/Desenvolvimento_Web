 //Pensou em API --> Back End

 const express = require('express') //importar o express | instanciar o express
 const app = express()
 const port = 8050

 app.use(express.json())
 
 let bancoDeDadosProdutos = [
    
 ]

app.get('/produtos', (req, res) => {
    //res.send(bancoDeDadosProdutos)    
    return res.status(200).json(bancoDeDadosProdutos)
})

app.post('/adicionar-produto', (req, res) => {
    let body = req.body
    console.log(body)

    bancoDeDadosProdutos.push(body)
    return res.status(201).json('produto adicionado com sucesso')
})

 app.listen(port, () => { //() => Arrow function
    console.log(`servidor rodando http://localhost:${port}`)
 })