import { Component, OnInit } from '@angular/core';
import { Receita } from '../model/receita.model';
import { ReceitasService } from '../services/receitas.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css'],
  providers: [ReceitasService]
})
export class ReceitasComponent implements OnInit {

  receitaSelecionada: Receita;

  constructor(private receitaService: ReceitasService) { }

  ngOnInit() {
    this.receitaService.receitaSelecionada.subscribe(
      (receita: Receita) => {
        this.receitaSelecionada = receita;
      }
    );
  }

}
