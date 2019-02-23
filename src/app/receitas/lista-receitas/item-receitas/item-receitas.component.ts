import { Component, OnInit, Input } from '@angular/core';
import { Receita } from 'src/app/model/receita.model';
import { ReceitasService } from 'src/app/services/receitas.service';

@Component({
  selector: 'app-item-receitas',
  templateUrl: './item-receitas.component.html',
  styleUrls: ['./item-receitas.component.css']
})
export class ItemReceitasComponent implements OnInit {
  @Input() receita: Receita;

  constructor(private receitaService: ReceitasService) { }

  ngOnInit() {
  }

  onSelected() {
   this.receitaService.receitaSelecionada.emit(this.receita);
  }

}
