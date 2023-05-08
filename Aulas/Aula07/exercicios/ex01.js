const express = require('express')
const app = express()
const port = 5000

let bandas = [
    {
        nome: "Slipknot",
        principaisMusicas: ["Duality", "Psychosocial"],
        integrantes: [
            {
                nomeIntegrante: "Corey Taylor",
                paisOrigem: "EUA",
                idade: 49 
            }
        ]
    }
]
app.get("/bandas", function(req, res){
    return res.send(bandas)
})


// -------------------- SERVIDOR -----------------------

app.listen(port, function(){
    console.log(`Servidor rodando http://localhost:${port}`)
})