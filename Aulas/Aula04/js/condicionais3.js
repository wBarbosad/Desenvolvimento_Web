var pessoa = { //Objeto em javascript
    nome: "Vittoria",
    idade: 25,
    endereco: { //O endereço vai ser um objeto
        rua: "Rua X",
        cep: "085111098"
    }
}
if(pessoa.endereco.cep == "085111098"){
    console.log("Valor do frete = R$ 15")
}

console.log(pessoa.nome)

if(pessoa.idade >= 18){
    console.log("É maior idade")
} else if (pessoa.idade<18 && pessoa.idade>0){
    console.log("Menor de idade")
} else{
    console.log("Informações inválidas!")
}