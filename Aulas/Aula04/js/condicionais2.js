//onsole.log(pessoa.idade)
//console.log(pessoa.nome)

var nome = "admin"
var senha = "admin"

if(senha == "password" && nome == "admin"){
    console.log("Bem vindo ao sima | Voce eh o admin")
} else if (senha == "password" || nome == "admin"){
    console.log("Bem vindo ao sistema | voce nao eh o admin, e tem menos")
}