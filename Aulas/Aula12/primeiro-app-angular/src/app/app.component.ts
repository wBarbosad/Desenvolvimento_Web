import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public mensagem: string = 'Olá angular!';
  public nome: string = 'Fulano';
  public idade: number = 20;
  public profissao: string = 'DEV Javascript';

  public listaAnimais = [{id: "D2E", nome: 'Maslow', raca: "Batata"},
                        {id: "d2A", nome: "Maklow", raca: "Cenoura" }]
}
