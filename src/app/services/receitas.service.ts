import { Injectable, EventEmitter } from '@angular/core';
import { Receita } from '../model/receita.model';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  receitaSelecionada = new EventEmitter<Receita>();

  private receitas: Receita[] = [
    new Receita('MOLHO BRANCO PARA MACARRÃO',
    'Molho branco para servir de acompanhamento para macarrão',
    'https://img.itdg.com.br/tdg/images/recipes/000/008/072/96655/96655_original.jpg?mode=crop&width=710&height=400'),
    new Receita('CREME DE MILHO',
    'Creme feito com milho e leite',
    'https://img.itdg.com.br/tdg/images/recipes/000/006/662/280258/280258_original.jpg?mode=crop&width=710&height=400')
  ];

  getReceitas() {
    return this.receitas.slice();
  }
}
