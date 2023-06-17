export default class Produto{

  nome: string;
  descricao: string;
  preco: number;
  imagem: string;

  constructor(nome: string, descricao: string, preco: number, imagem: string){
    this.descricao = descricao;
    this.nome = nome;
    this.preco = preco;
    this.imagem = imagem;
  }

}
