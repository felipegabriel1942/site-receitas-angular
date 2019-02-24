import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceitasComponent } from './receitas/receitas.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';
import { ReceitaHomeComponent } from './receitas/receita-home/receita-home.component';
import { DetalhesReceitasComponent } from './receitas/detalhes-receitas/detalhes-receitas.component';
import { EditarReceitaComponent } from './receitas/editar-receita/editar-receita.component';

const routes: Routes = [
  { path: '', redirectTo: '/receitas', pathMatch: 'full'},
  { path: 'receitas', component: ReceitasComponent, children: [
    { path: '', component: ReceitaHomeComponent},
    { path: 'novo', component: EditarReceitaComponent},
    { path: ':id', component: DetalhesReceitasComponent},
    { path: ':id/edicao', component: EditarReceitaComponent}
  ]},
  { path: 'lista-compras', component: ListaComprasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
