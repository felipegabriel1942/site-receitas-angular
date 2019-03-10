import { Component, OnInit } from '@angular/core';
import { ReceitasService } from '../services/receitas.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css'],
  providers: [ReceitasService]
})
export class ReceitasComponent implements OnInit {

  constructor(private receitaService: ReceitasService) { }

  ngOnInit() {

  }

}
