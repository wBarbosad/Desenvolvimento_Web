var artista1 = {
    nome: "Clóvis",
    anoDeLancamentoDoPrimerioCD: "2021",
    estilo: "Samba",
    melhoresMusicas: ["Os circuito", "A amora", "A cereja"],
    integrantes: [
        {
            nomeCompleto: "Clóvis",
            paisDeOrigem: "Brasil",
            idade: 56
        }
    ]
}
var artista2 = {
    nome: "Portela",
    anoDeLancamentoDoPrimerioCD: "2019",
    estilo: "Pagode",
    melhoresMusicas: ["A batida do pandeiro", "O tamborim", "A tirigueta"],
    integrantes: [
        {
            nomeCompleto: "Portela",
            paisDeOrigem: "Brasil",
            idade: 69
        }
    ]

}
var artista3 = {
    nome: "Monja",
    estilo: "Rock",
    melhoresMusicas: ["Duality", "O fogo do amigo", "Trovoadas da noite"],
    integrantes: [
        {
            nomeCompleto: "Monja",
            paisDeOrigem: "Brasil",
            idade: 75
        }
    ]
}

var dataBase = []

dataBase.push(artista1)
dataBase.push(artista2)
dataBase.push(artista3)

console.log(dataBase)
dataBase.sort()
console.log(dataBase)
dataBase.pop()
console.log(dataBase)