import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingrediente } from 'src/app/model/ingrediente.model';

@Component({
  selector: 'app-editar-lista-compras',
  templateUrl: './editar-lista-compras.component.html',
  styleUrls: ['./editar-lista-compras.component.css']
})
export class EditarListaComprasComponent implements OnInit {

  @ViewChild('nomeInput') nomeInputReference: ElementRef;
  @ViewChild('quantidadeInput') quantidadeInputReference: ElementRef;
  @Output() ingredienteAdicionado = new EventEmitter<Ingrediente>();


  constructor() { }

  ngOnInit() {
  }

  adicionarItem() {
    const nomeIngredinte = this.nomeInputReference.nativeElement.value;
    const quantidadeIngredinte = this.quantidadeInputReference.nativeElement.value;
    const novoIngrediente = new Ingrediente(nomeIngredinte, quantidadeIngredinte);
    this.ingredienteAdicionado.emit(novoIngrediente);
  }

}
