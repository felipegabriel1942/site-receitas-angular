import { Injectable, EventEmitter } from '@angular/core';
import { Receita } from '../model/receita.model';
import { Ingrediente } from '../model/ingrediente.model';
import { ListaComprasService } from './lista-compras.service';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  private receitas: Receita[] = [
    new Receita('MOLHO BRANCO PARA MACARRÃO',
    'Molho branco para servir de acompanhamento para macarrão',
    'https://img.itdg.com.br/tdg/images/recipes/000/008/072/96655/96655_original.jpg?mode=crop&width=710&height=400',
    [
      new Ingrediente('Cebola', 1),
      new Ingrediente('Margarina', 1),
      new Ingrediente('Creme de leite', 1),
      new Ingrediente('Litro de leite', 1),
      new Ingrediente('Maisena', 1),
      new Ingrediente('Queijo Ralado', 1),
      new Ingrediente('Pimenta do reino', 1),
      new Ingrediente('Sal', 1)

    ]),
    new Receita('CREME DE MILHO',
    'Creme feito com milho e leite',
    'https://img.itdg.com.br/tdg/images/recipes/000/006/662/280258/280258_original.jpg?mode=crop&width=710&height=400',
    [
      new Ingrediente('Lata de milho', 1),
      new Ingrediente('Xícara(chá) de leite', 2),
      new Ingrediente('Manteiga', 1),
      new Ingrediente('Cebola', 1),
      new Ingrediente('Tablet de caldo de legumes', 1),
      new Ingrediente('Lata de creme de leite', 1),
      new Ingrediente('Colher de sopa de farinha de trigo', 2)
    ])
  ];

  constructor(private listaComprasService: ListaComprasService) {

  }
  // O metodo slice() nos metodos abaixo foi utilizado para criar
  // uma cópia da lista solicitada e não comprometer a original
  getReceitas() {
    return this.receitas.slice();
  }

  getReceita(index: number) {
    return this.receitas[index];
  }

  addIngredientesParaListaCompras(ingredientes: Ingrediente[]) {
    this.listaComprasService.addIngredientes(ingredientes);
  }
}
