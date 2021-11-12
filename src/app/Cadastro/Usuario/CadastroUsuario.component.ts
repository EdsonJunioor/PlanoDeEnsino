import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from './../../Models/UsuarioModel';
import { UsuarioService } from './../../Services/Usuario.service';

@Component({
  selector: 'app-CadastroUsuario',
  templateUrl: './CadastroUsuario.component.html',
  styleUrls: ['./CadastroUsuario.component.css'],
})
export class CadastroUsuarioComponent implements OnInit {
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.carregarUsuarios();
  }

  public usuarios: UsuarioModel[] = [];
  public usuario = new UsuarioModel();

  // usuarios = [
  //   { nome:'Edson Junior', login:'edson.junior@athon.com', tipoUsuario: 'Professor', status: 'Ativo' },
  //   { nome:'Felipe Gallonetti', login:'felipe.gallonetti@athon.com', tipoUsuario: 'Professor', status: 'Ativo' },
  //   { nome:'Gustavo Gama', login:'gustavo.gama@athon.com', tipoUsuario: 'Professor', status: 'Ativo' },
  //   { nome:'Gustavo Clareti', login:'gustavo.clareti@athon.com', tipoUsuario: 'Professor', status: 'Ativo' }
  // ];

  carregarUsuarios() {
    this.usuarioService.getAll().subscribe(
      (listaUsuarios: UsuarioModel[]) => {
        this.usuarios = listaUsuarios;
        return this.usuarios;
      },
      (erro: any) => {
        console.error('Não foi possível carregar os usuários.');
      }
    );
  }

  salvarUsuario() {
    this.usuarioService
      .post(this.usuario)
      .subscribe(
        (resposta) => {
          this.usuario = new UsuarioModel();
          this.carregarUsuarios();
        }
      );
  }
}
