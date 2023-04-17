var pessoa1 = {
    nome: "José",
    altura: 1.55

}
var pessoa2 = {
    nome: "Amanda",
    altura: 1.55
}
var pessoa3 = {
    nome: "Samara",
    altura: 1.55
}

if(pessoa1.altura>pessoa2.altura && pessoa1.altura>pessoa3.altura){
    console.log(pessoa1.nome + " é o(a) mais alto(a)")
} else if(pessoa2.altura>pessoa1.altura && pessoa2.altura>pessoa3.altura){
    console.log(pessoa2.nome + " é o(a) mais alto(a)")
} else if(pessoa3.altura>pessoa1.altura && pessoa3.altura>pessoa2.altura){
    console.log(pessoa3.nome + " é o(a) mais alto(a) com " + pessoa3.altura + "m de altura")
} else{
    console.log("Todos possuem a mesma altura!")
}