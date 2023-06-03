const mongoose = require('mongoose')

const lancheShema = mongoose.Schema({
    nome: {type: String, required: true},
    descricao: {type: String, required: true},
    fabricante: {type: String, required: true},
    emEstoque: {type: Boolean, required: true},
    publicadoEm: {type: Date, required: true}
})


const lanche = mongoose.model("Lanche", lancheShema)

module.exports = lanche