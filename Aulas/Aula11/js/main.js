"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gato_1 = __importDefault(require("./gato"));
const pessoa_1 = __importDefault(require("./pessoa"));
let pessoa = new pessoa_1.default("Fulano", 10);
pessoa.setNome("Ciclano");
console.log(`${pessoa.getNome()} tem ${pessoa.getIdade()} anos`);
let gatinho = new gato_1.default;
gatinho.emitirSom();
