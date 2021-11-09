import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {
    let getLogado = localStorage.getItem('logado');
    localStorage.setItem('logado', 'false');
  }

  logar() {
    localStorage.setItem('logado', 'true');
  }

  ngOnInit() {}
}
