import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../model/ingrediente.model';
import { ListaComprasService } from '../services/lista-compras.service';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent implements OnInit {

  ingredientes: Ingrediente[];

  constructor(private listaCompraService: ListaComprasService) { }

  ngOnInit() {
    this.ingredientes = this.listaCompraService.getIngredientes();
    this.listaCompraService.ingredienteMudou
    .subscribe(
      (ingredientes: Ingrediente[]) => {
        this.ingredientes = ingredientes;
      }
    );
  }

}
