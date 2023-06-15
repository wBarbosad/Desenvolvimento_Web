export default class Animal {
    private _nome: string
   // private _raca: string

    constructor(nome: string, raca: string){
        this._nome = nome
    }
    public getNome(){
        return this._nome;
    }
    public comer(): void {
         console.log(`Animal ${this._nome} está comendo `)
    }
}