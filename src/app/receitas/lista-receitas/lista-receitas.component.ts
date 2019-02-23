import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Receita } from 'src/app/model/receita.model';

@Component({
  selector: 'app-lista-receitas',
  templateUrl: './lista-receitas.component.html',
  styleUrls: ['./lista-receitas.component.css']
})
export class ListaReceitasComponent implements OnInit {

  @Output() receitaFoiSelecionada = new EventEmitter<Receita>();

  receitas: Receita[] = [
    new Receita('MOLHO BRANCO PARA MACARRÃO',
    'Molho branco para servir de acompanhamento para macarrão',
    'https://img.itdg.com.br/tdg/images/recipes/000/008/072/96655/96655_original.jpg?mode=crop&width=710&height=400'),
    new Receita('CREME DE MILHO',
    'Creme feito com milho e leite',
    'https://img.itdg.com.br/tdg/images/recipes/000/006/662/280258/280258_original.jpg?mode=crop&width=710&height=400')
  ];
  constructor() { }

  ngOnInit() {
  }

  onReceitaSelecionada(receita: Receita) {
    this.receitaFoiSelecionada.emit(receita);
  }

}
