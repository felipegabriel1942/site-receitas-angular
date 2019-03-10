import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingrediente } from '../model/ingrediente.model';
import { ListaComprasService } from '../services/lista-compras.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent implements OnInit, OnDestroy {

  ingredientes: Ingrediente[];
  private subscription: Subscription;

  constructor(private listaCompraService: ListaComprasService) { }

  ngOnInit() {
    this.ingredientes = this.listaCompraService.getIngredientes();
    this.subscription = this.listaCompraService.ingredienteMudou
    .subscribe(
      (ingredientes: Ingrediente[]) => {
        this.ingredientes = ingredientes;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.listaCompraService.edicao.next(index);
  }

}
