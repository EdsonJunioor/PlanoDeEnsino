import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../Models/LoginModel';
import { LoginService } from '../Services/Login.service';
import { UsuarioModel } from './../Models/UsuarioModel';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent implements OnInit {

  public login = new LoginModel;
  public usuarioLogado = new UsuarioModel;
  public alerta = false;


  constructor(private loginService: LoginService, private router: Router) {
    let getLogado = localStorage.getItem('logado');
    localStorage.setItem('logado', 'false');
  }

  logar() {

    this.loginService.getLogin(this.login).subscribe(
      (resposta: any) => {
      this.usuarioLogado = resposta;
      localStorage.setItem('logado', 'true');
      this.router.navigate(['cadastro-usuario']);
    },
    (erro: any) => {
      alert('Não foi possível realizar login, e-mail ou senha inválido.');
    });
  }

  ngOnInit() {}
}