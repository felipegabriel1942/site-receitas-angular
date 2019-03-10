import { Component, OnInit } from '@angular/core';
import { Receita } from 'src/app/model/receita.model';
import { ReceitasService } from 'src/app/services/receitas.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-receitas',
  templateUrl: './detalhes-receitas.component.html',
  styleUrls: ['./detalhes-receitas.component.css']
})
export class DetalhesReceitasComponent implements OnInit {
  receita: Receita;
  id: number;

  constructor(private receitaService: ReceitasService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe((params: Params) => {
      this.id = +params['id'];
      this.receita = this.receitaService.getReceita(this.id);
      console.log(this.receita);
    });
  }

  adicionarItensAListaCompras() {
    this.receitaService.addIngredientesParaListaCompras(this.receita.ingredientes);
  }

  onEdicaoReceita() {
    this.router.navigate(['edicao'], {relativeTo: this.route});
  }

  onDeleteReceita() {
    this.receitaService.deletarReceita(this.id);
    this.router.navigate(['/receitas']);

  }

}
