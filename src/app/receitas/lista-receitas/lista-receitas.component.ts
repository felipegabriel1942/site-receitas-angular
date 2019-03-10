import { Component, OnInit, OnDestroy} from '@angular/core';
import { Receita } from 'src/app/model/receita.model';
import { ReceitasService } from 'src/app/services/receitas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-receitas',
  templateUrl: './lista-receitas.component.html',
  styleUrls: ['./lista-receitas.component.css']
})
export class ListaReceitasComponent implements OnInit, OnDestroy {

  receitas: Receita[];
  subscription: Subscription;

  constructor(private receitaService: ReceitasService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.receitaService.receitaMudou.subscribe(
      (receitas: Receita[]) => {
        this.receitas = receitas;
      }
    );
    this.receitas = this.receitaService.getReceitas();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNovaReceita() {
    this.router.navigate(['novo'], {relativeTo: this.route});
  }

}
