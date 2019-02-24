import { Component, OnInit} from '@angular/core';
import { Receita } from 'src/app/model/receita.model';
import { ReceitasService } from 'src/app/services/receitas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-receitas',
  templateUrl: './lista-receitas.component.html',
  styleUrls: ['./lista-receitas.component.css']
})
export class ListaReceitasComponent implements OnInit {

  receitas: Receita[];

  constructor(private receitaService: ReceitasService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.receitas = this.receitaService.getReceitas();
  }

  onNovaReceita() {
    this.router.navigate(['novo'], {relativeTo: this.route});
  }
}
