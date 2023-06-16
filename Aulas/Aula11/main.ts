import Gato from "./gato";
import Pessoa from "./pessoa";

let pessoa = new Pessoa("Fulano", 10)

pessoa.setNome("Ciclano")

console.log(`${pessoa.getNome()} tem ${pessoa.getIdade()} anos`)


let gatinho = new Gato

gatinho.emitirSom()