const mongoose = require('mongoose')

const bebidaShema = mongoose.Schema({
    nome: {type: String, required: true},
    descricao: {type: String, required: true},
    fabricante: {type: String, required: true},
    emEstoque: {type: Boolean, required: true},
    publicadoEm: {type: Date, required: true} //Não consegui usar adequadamente o tipo de dado "Date"
})


const bebida = mongoose.model("Bebida", bebidaShema)

module.exports = bebida