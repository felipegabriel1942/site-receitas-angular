import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ReceitasService } from 'src/app/services/receitas.service';

@Component({
  selector: 'app-editar-receita',
  templateUrl: './editar-receita.component.html',
  styleUrls: ['./editar-receita.component.css']
})
export class EditarReceitaComponent implements OnInit {

  id: number;
  modoEdicao = false;
  receitaForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private receitaService: ReceitasService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.modoEdicao = params['id'] != null;
        this.initForm();
      }
    );
  }

  getControls() {
    const controls = (<FormArray> this.receitaForm.get('ingredientes')).controls ;
    console.log(controls);
    return controls;
  }

  onSubmit() {
    console.log(this.receitaForm);
  }

  onAddIngrediente() {
    (<FormArray>this.receitaForm.get('ingredientes')).push(
      new FormGroup({
        nome: new FormControl(null, Validators.required),
        quantidade: new FormControl(null, [Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  private initForm() {
    let nomeReceita = '';
    let caminhoImagemReceita = '';
    let descricaoRecceita = '';
    const receitaIngredientes = new FormArray([]);

    if (this.modoEdicao) {
      const receita = this.receitaService.getReceita(this.id);
      nomeReceita = receita.nome;
      caminhoImagemReceita = receita.caminhoImagem;
      descricaoRecceita = receita.descricao;

      if (receita['ingredientes']) {
        for (const ingrediente of receita.ingredientes) {
          receitaIngredientes.push(
            new FormGroup({
              nome: new FormControl(ingrediente.nome, Validators.required),
              quantidade: new FormControl(ingrediente.quantidade, [Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }
    this.receitaForm = new FormGroup({
      nome: new FormControl(nomeReceita, Validators.required),
      imagePath: new FormControl(caminhoImagemReceita, Validators.required),
      descricao: new FormControl(descricaoRecceita, Validators.required),
      ingredientes: receitaIngredientes
    });
  }

}
