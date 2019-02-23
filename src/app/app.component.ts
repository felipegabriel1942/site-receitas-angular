import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  componenteCarregado = 'receita';

  onNavigate(componente: string) {
    this.componenteCarregado = componente;
  }
}
