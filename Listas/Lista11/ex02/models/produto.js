let mongoose = require('mongoose')

const ProdutoSchema = mongoose.Schema({
    nome: {type: String, require:true},
    descricao: {type: String, required: true},
    valor: {type: String, required: true},
    emEstoque: {type: Boolean, required: true},
    publicadoEm: {type: Date, required: true}
})


const produto = mongoose.model('Produtos', ProdutoSchema)


module.exports = produto
