//Schema = O que o animal vai ter que ter.
// async e awaint [Programação paralela: "Faça alguma coisa enquanto estou fazendo isso aqui"]

const mongoose = require('mongoose')

const animalSchema = mongoose.Schema({
    nome: { type: String, required: true},
    raca: { type: String, required: true},
    peso: { type: Number, required: true}
})

const animal = mongoose.model('Animais', animalSchema)

module.exports = animal