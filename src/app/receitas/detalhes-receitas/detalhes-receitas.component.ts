import { Component, OnInit, Input } from '@angular/core';
import { Receita } from 'src/app/model/receita.model';
import { ReceitasService } from 'src/app/services/receitas.service';

@Component({
  selector: 'app-detalhes-receitas',
  templateUrl: './detalhes-receitas.component.html',
  styleUrls: ['./detalhes-receitas.component.css']
})
export class DetalhesReceitasComponent implements OnInit {
  @Input() receita: Receita;

  constructor(private receitaService: ReceitasService) { }

  ngOnInit() {
  }

  adicionarItensAListaCompras() {
    this.receitaService.addIngredientesParaListaCompras(this.receita.ingredientes);
  }

}
