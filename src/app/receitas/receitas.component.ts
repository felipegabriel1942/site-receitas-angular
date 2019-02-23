import { Component, OnInit } from '@angular/core';
import { Receita } from '../model/receita.model';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {

  receitaSelecionada: Receita;

  constructor() { }

  ngOnInit() {
  }

}
