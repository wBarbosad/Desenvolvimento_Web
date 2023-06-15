export default class Produto{
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;

  produto: Produto[] = new Array<Produto>();

  constructor(nome: string, descricao: string, preco: number, imagem: string){
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.imagem = imagem;
  }
}
