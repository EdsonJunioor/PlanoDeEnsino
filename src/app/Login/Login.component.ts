import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../Models/LoginModel';
import { LoginService } from '../Services/Login.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent implements OnInit {

  public login = new LoginModel;
  public usuarioLogado: any;
  public alerta = false;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {}

  logar() {

    this.loginService.getLogin(this.login).subscribe(
      (resposta: any) => {
      
      if(resposta){
        this.usuarioLogado = resposta;
        
        this.router.navigate(['home']);
      }
      else{
      }
    },
    (erro: any) => {
      alert('Não foi possível realizar login, e-mail ou senha inválido.');
    });
  }
}