const mongoose = require("mongoose")



const pedraShema = mongoose.Schema({
    nome: {type: String, required: true},
    preco: {type: Number, required: true},
    tamanho: {type: Number, required: true}
})


const pedra = mongoose.model("Pedra", pedraShema)
module.exports = pedra