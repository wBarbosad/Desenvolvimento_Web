const mongoose = require('mongoose')

const produtoSchema = mongoose.Schema({
    nome: {type: String, required: true},
    descrição: { type: String, required: true},
    valor: {type: Number, required: true }
})



const Produto = mongoose.model('produtos', produtoSchema)

module.exports = Produto