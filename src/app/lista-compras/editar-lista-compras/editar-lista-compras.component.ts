import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Ingrediente } from 'src/app/model/ingrediente.model';
import { ListaComprasService } from 'src/app/services/lista-compras.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editar-lista-compras',
  templateUrl: './editar-lista-compras.component.html',
  styleUrls: ['./editar-lista-compras.component.css']
})
export class EditarListaComprasComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  modoEdicao = false;
  indexItemEditado: number;
  itemEditado: Ingrediente;

  constructor(private listaComprasService: ListaComprasService) { }

  ngOnInit() {
    this.subscription = this.listaComprasService.edicao
    .subscribe((index: number) => {
      this.indexItemEditado = index;
      this.modoEdicao = true;
      this.itemEditado = this.listaComprasService.getIngredient(this.indexItemEditado);
      this.slForm.setValue({
          nome: this.itemEditado.nome,
          quantidade: this.itemEditado.quantidade
        });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClear() {
    this.slForm.reset();
    this.modoEdicao = false;
  }

  onDelete() {
    this.listaComprasService.deleteIngrediente(this.indexItemEditado);
    this.onClear();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const novoIngrediente = new Ingrediente(value.nome, value.quantidade);
    if (this.modoEdicao) {
      this.listaComprasService.updateIngredient(this.indexItemEditado, novoIngrediente);
    } else {
      this.listaComprasService.addIngrediente(novoIngrediente);
    }
    this.modoEdicao = false;
    form.reset();
  }
}
