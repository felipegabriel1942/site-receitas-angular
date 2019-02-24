import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Ingrediente } from 'src/app/model/ingrediente.model';
import { ListaComprasService } from 'src/app/services/lista-compras.service';

@Component({
  selector: 'app-editar-lista-compras',
  templateUrl: './editar-lista-compras.component.html',
  styleUrls: ['./editar-lista-compras.component.css']
})
export class EditarListaComprasComponent implements OnInit {

  @ViewChild('nomeInput') nomeInputReference: ElementRef;
  @ViewChild('quantidadeInput') quantidadeInputReference: ElementRef;


  constructor(private listaComprasService: ListaComprasService) { }

  ngOnInit() {
  }

  adicionarItem() {
    const nomeIngredinte = this.nomeInputReference.nativeElement.value;
    const quantidadeIngredinte = this.quantidadeInputReference.nativeElement.value;
    const novoIngrediente = new Ingrediente(nomeIngredinte, quantidadeIngredinte);
    this.listaComprasService.addIngrediente(novoIngrediente);

  }

}
