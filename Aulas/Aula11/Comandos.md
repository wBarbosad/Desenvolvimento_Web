# POO in Typescript 

### Comandos usados na aula 11: 
    - (npm install -g typescript) = instalar o typescript [npm instala p/ mim de forma global "máquina inteira"]

    - tsc executa o arquivo ts
    - tsc --init [inicializa as configurações do typescript]
    - tsc --watch [P/ transpilar todos os arquivos ts em js.]
    - rm remove arquivos
    - rm -rf - remove pastas

    - npm uninstall -g typescript
### Local: 
    - local: npm install typescript --save
    - Ir em package.json antes de depedencies e criar um: 

      "scripts":{
          "tsc":"tsc",
          "tsc-init": "tsc --init",
          "tsc-watch": "tsc --watch"
        },
        
      - npm rum "tsc-watch"

#### 

    Descomentar as linhas na pasta de configuração do ts;
    "rootDir:" "./"
    "outDir": "./js" = Cria uma pasta Js e coloca todos os arquivos que foram transformados em js a partir do ts.
