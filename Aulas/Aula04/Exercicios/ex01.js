var pessoa1 = {
    nome: "José",
    idade: 12

}
var pessoa2 = {
    nome: "Amanda",
    idade: 50
}
var pessoa3 = {
    nome: "Samara",
    idade: 56
}

//Verifique quem é mais velho dos três

if (pessoa1.idade>pessoa2.idade && pessoa1.idade>pessoa3.idade){
    console.log(pessoa1.nome + "é o(a) mais velho(a)")
} else if (pessoa2.idade>pessoa1.idade && pessoa2.idade>pessoa3.idade){
    console.log(pessoa2.nome + "é o(a) mais velho(a)")
} else if (pessoa3.idade>pessoa2.idade && pessoa3.idade>pessoa1.idade){
    console.log(pessoa3.nome + "é o(a) mais velho(a)")
} else if(pessoa1.idade==pessoa2.idade && pessoa1.idade==pessoa3.idade && pessoa2.idade==pessoa3.idade){
    console.log("As três pessoas tem a mesma idade!" + pessoa1.idade);
}