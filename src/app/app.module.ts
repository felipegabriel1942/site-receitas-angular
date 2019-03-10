import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { ListaReceitasComponent } from './receitas/lista-receitas/lista-receitas.component';
import { DetalhesReceitasComponent } from './receitas/detalhes-receitas/detalhes-receitas.component';
import { ItemReceitasComponent } from './receitas/lista-receitas/item-receitas/item-receitas.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';
import { EditarListaComprasComponent } from './lista-compras/editar-lista-compras/editar-lista-compras.component';
import { DropdownDirective } from './compartilhado/dropdown.directive';
import { ListaComprasService } from './services/lista-compras.service';
import { ReceitaHomeComponent } from './receitas/receita-home/receita-home.component';
import { EditarReceitaComponent } from './receitas/editar-receita/editar-receita.component';
import { ReceitasService } from './services/receitas.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceitasComponent,
    ListaReceitasComponent,
    DetalhesReceitasComponent,
    ItemReceitasComponent,
    ListaComprasComponent,
    EditarListaComprasComponent,
    DropdownDirective,
    ReceitaHomeComponent,
    EditarReceitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ListaComprasService, ReceitasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
