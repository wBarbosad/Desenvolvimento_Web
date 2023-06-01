const mongoose = require('mongoose')

const lancheSchema = mongoose.Schema({
    nome: {type: String, required: true},
    descricao: {type: String, required: true},
    vegano: {type: Boolean, required: true},
    emEstoque: {type: Boolean, required: true},
    publicadoEm: {type: Date, required: true}

})

const bebida = mongoose.model("Lanche", lancheSchema)
module.exports = bebida