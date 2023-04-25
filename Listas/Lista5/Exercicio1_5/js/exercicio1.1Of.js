
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
for (let i  of lista) { // Of verifica os valores.
    if(i.ehAdmin){
        console.log(`Olá ${lista[i].nome}!\nBem-vindo(a) você é o(a) administrador(a) do sistema, enviamos um email para ${lista[i].email} para você criar uma senha`)
    }
    else{
        console.log(`Olá ${lista[i].nome}!\nBem-vindo(a) você é o(a) não administrador(a) do sistema, enviamos um email para ${lista[i].email} para você criar uma senha`)
    }
}