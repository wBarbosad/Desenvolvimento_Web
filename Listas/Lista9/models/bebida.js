const mongoose = require('mongoose')


const bebidaShema = mongoose.Schema({ //Características/propriedades das bebidas;
    nome: {type: String, required: true},
    descricao: {type: String, required: true},
    fabricante: {type: String, required: true},
    emEstoque: {type: Boolean, required: true},
    publicadoEm: {type: Date, required: true}
})

const bebida = mongoose.model("Bebidas", bebidaShema) //Criar um modelo chamado "Bebidas" com características citadas acima.

module.exports = bebida