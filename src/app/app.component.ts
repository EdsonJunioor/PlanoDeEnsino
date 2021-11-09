import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PlanoDeEnsino';

  getLogado: any;

  constructor() {
    this.getLogado = localStorage.getItem('logado');
  }
}
