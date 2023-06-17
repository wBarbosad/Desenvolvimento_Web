import { Component } from '@angular/core';
import Produto from './models/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public listaProdutos: Produto[] = new Array<Produto>()

  constructor(){
    this.listaProdutos.push(new Produto("Paçoca", "Amendoim moído, açúcar e sal", 1.00, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx9jzCdJa2liZTKIeKKzlZLs2--2uDoea8Fw7hxpQmlZMacu6Fvp3-q3JtAP17f5oVr3Q&usqp=CAU"))
    this.listaProdutos.push(new Produto("Pé de moça", "Amendoim moído, açúcar, sal e leite condensado", 2, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBG7JdhvZqIV1U8fAqIc_2EInHG5X4Zd8JTg&usqp=CAU"))
  }
}
