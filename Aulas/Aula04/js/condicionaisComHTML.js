var idade = Number.parseInt(prompt("Digite sua idade: "))
if(idade >= 18){
    document.writeln("O usuário é maior de idade!")
} else if (idade < 18 && idade > 0){
    document.writeln("O usuário é menor de idade")
} else{
    document.writeln("Erro")
}