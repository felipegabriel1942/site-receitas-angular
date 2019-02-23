import { Component, OnInit} from '@angular/core';
import { Receita } from 'src/app/model/receita.model';
import { ReceitasService } from 'src/app/services/receitas.service';

@Component({
  selector: 'app-lista-receitas',
  templateUrl: './lista-receitas.component.html',
  styleUrls: ['./lista-receitas.component.css']
})
export class ListaReceitasComponent implements OnInit {

  receitas: Receita[];

  constructor(private receitaService: ReceitasService) { }

  ngOnInit() {
    this.receitas = this.receitaService.getReceitas();
  }
}
