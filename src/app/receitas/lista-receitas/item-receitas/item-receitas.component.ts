import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Receita } from 'src/app/model/receita.model';

@Component({
  selector: 'app-item-receitas',
  templateUrl: './item-receitas.component.html',
  styleUrls: ['./item-receitas.component.css']
})
export class ItemReceitasComponent implements OnInit {
  @Input() receita: Receita;
  @Output() receitaSelecionada = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.receitaSelecionada.emit();
  }

}
