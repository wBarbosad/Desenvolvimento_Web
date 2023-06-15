
export default class Pessoa {
    private _nome: string
    private _idade: number

    constructor(nome: string, idade: number) {
        this._idade = idade
        this._nome = nome
    }

    public getNome() {
        return this._nome;
    }
    public setNome(nome: string): void {
        this._nome = nome;
    }
    public getIdade() {
        return this._idade;
    }
    public setIdade(idade: number): void {
        this._idade = idade;
    }
}
