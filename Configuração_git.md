# GIT - Configurações

### Configurar usuario 
    - Comandos
        git config --global user.name "Nome do meu usuario no git"
        git config --global user.email "Email do github"

### Baixar o repositorio do github 
    - Comandos
        git clone link-repositorio


### Adicionar e subir alterações no repositorio 
    git add .
    git commit -m "Mensagem"
    git push
    git add . | prepara arquivos para serem subidos no repositorio
    git commit -m | Adicionar mensagem
    git push | sobe arquivos no respositorio


### Criar branch e mudar de branch

    - git branch nome-da-branch | cria uma branch
    - git checkout nome-da-branch | muda de branch
    - git branch -a | listar todas as branches
    - git checkout -d nome-da-branch | deleta uma branch
    - git checkout -b nome-da-branch | cria uma branch e troca para a branch criada
    - git pull | Atualiza o respositorio local

