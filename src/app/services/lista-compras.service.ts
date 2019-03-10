import { Injectable} from '@angular/core';
import { Ingrediente } from '../model/ingrediente.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaComprasService {

  ingredienteMudou = new Subject<Ingrediente[]>();
  edicao = new Subject<number>();

  private ingredientes: Ingrediente[] = [
    new Ingrediente('Farinha', 5),
    new Ingrediente('Leite', 2),
    new Ingrediente('Ovos', 4)
  ];

  // O metodo slice() nos metodos abaixo foi utilizado para criar
  // uma cópia da lista solicitada e não comprometer a original
  getIngredientes() {
    return this.ingredientes.slice();
  }

  getIngredient(index: number) {
    return this.ingredientes[index];
  }

  addIngrediente(ingrediente: Ingrediente) {
    this.ingredientes.push(ingrediente);
    this.ingredienteMudou.next(this.ingredientes.slice());
  }

  addIngredientes(ingredientes: Ingrediente[]) {
    this.ingredientes = [];
    this.ingredientes.push(...ingredientes);
    this.ingredienteMudou.next(this.ingredientes.slice());
  }

  updateIngredient(index: number, novoIngrediente: Ingrediente) {
    this.ingredientes[index] = novoIngrediente;
    this.ingredienteMudou.next(this.ingredientes.slice());
  }

  deleteIngrediente(index: number) {
    this.ingredientes.splice(index, 1);
    this.ingredienteMudou.next(this.ingredientes.slice());
  }


}
