import { Component, OnInit, Input } from '@angular/core';
import { Receita } from 'src/app/model/receita.model';

@Component({
  selector: 'app-detalhes-receitas',
  templateUrl: './detalhes-receitas.component.html',
  styleUrls: ['./detalhes-receitas.component.css']
})
export class DetalhesReceitasComponent implements OnInit {
  @Input() receita: Receita;

  constructor() { }

  ngOnInit() {
  }

}
