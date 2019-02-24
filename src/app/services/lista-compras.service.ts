import { Injectable, EventEmitter } from '@angular/core';
import { Ingrediente } from '../model/ingrediente.model';

@Injectable({
  providedIn: 'root'
})
export class ListaComprasService {

  ingredienteMudou = new EventEmitter<Ingrediente[]>();

  private ingredientes: Ingrediente[] = [
    new Ingrediente('Farinha', 5),
    new Ingrediente('Leite', 2),
    new Ingrediente('Ovos', 4)
  ];

  getIngredientes() {
    return this.ingredientes.slice();
  }

  addIngrediente(ingrediente: Ingrediente) {
    this.ingredientes.push(ingrediente);
    this.ingredienteMudou.emit(this.ingredientes.slice());
  }

  addIngredientes(ingredientes: Ingrediente[]) {
    this.ingredientes = [];
    this.ingredientes.push(...ingredientes);
    this.ingredienteMudou.emit(this.ingredientes.slice());
  }

}
