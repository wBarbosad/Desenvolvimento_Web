"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    // private _raca: string
    constructor(nome, raca) {
        this._nome = nome;
    }
    getNome() {
        return this._nome;
    }
    comer() {
        console.log(`Animal ${this._nome} está comendo `);
    }
}
exports.default = Animal;
