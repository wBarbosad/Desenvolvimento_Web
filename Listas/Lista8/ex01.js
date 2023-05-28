let express = require('express')
let app = express()
let port = 4545
app.use(express.json())

let bancoDeDadosProdutos = []
app.get('/listas-produtos', (req, res) => {
    res.status(200).json(bancoDeDadosProdutos)
})
app.post('/adicionar-produto', (req, res) => {
    let body = req.body
    console.log(body)
    bancoDeDadosProdutos.push(body)
    res.status(201).json('Produto adicionado com sucesso!')

})
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})