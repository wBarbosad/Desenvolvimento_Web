var tarefas = [ 
    "lavar louça",
    "lavar roupa",
    "fazer comida",
    "lavar banheiro"
]

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(var i = 0; i<tarefas.length; i++){
    if(tarefas[i]=="lavar banheiro");{
        break
    }
    console.log(tarefas[i])
}
for(var x = 0; x<numeros.length; x++){
    if(numeros[x] % 2 == 0){
        console.log(`${numeros[x]} é par`)
    } else {
        console.log(`${numeros[x]} é impar`)
    }
}
for (var tarefa of tarefas){ //Acessa os valores da lista sem a necessidade de índices.
    console.log(tarefa)
}