
let lista = [
    { 
        nome: "Vittoria",
        idade: 25,
        ehAdmin: false,
        email: "vittoria@hotmail.com"

    },
    {
        nome: "Lais",
        idade: 23,
        ehAdmin: false,
        email: "lais@hotmail.com"
    },
    {
        nome: "Wesley",
        idade: 23,
        ehAdmin: true,
        email: "admwesley@hotmail.com"
    },
    {
        nome: "Adriana",
        idade: 41,
        ehAdmin: false,
        email: "adriana@hotmail.com"
    },
    {
        nome: "Willian",
        idade: 21,
        ehAdmin: false,
        email: "willian@hotmail.com"
    }
]

for (let i = 0; i < lista.length; i++) {
    if(lista[i].ehAdmin){
        console.log(`\nOlá ${lista[i].nome}!\nBem-vindo(a) você é o(a) administrador(a) do sistema, enviamos um email para ${lista[i].email} para você criar uma senha`)
    }
    else{
        console.log(`\nOlá ${lista[i].nome}!\nBem-vindo(a) você não é o(a) não administrador(a) do sistema, enviamos um email para ${lista[i].email} para você criar uma senha`)
    }
}
console.log("\n")