import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../model/ingrediente.model';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent implements OnInit {

  ingredientes: Ingrediente[] = [
    new Ingrediente('Farinha', 5),
    new Ingrediente('Leite', 2),
    new Ingrediente('Ovos', 4)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredienteAdicionado(ingrediente: Ingrediente) {
    this.ingredientes.push(ingrediente);
  }

}
