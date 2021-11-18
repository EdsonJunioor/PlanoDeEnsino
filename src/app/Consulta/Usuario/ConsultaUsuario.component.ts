import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from './../../Models/UsuarioModel';
import { UsuarioService } from './../../Services/Usuario.service';

@Component({
  selector: 'app-ConsultaUsuario',
  templateUrl: './ConsultaUsuario.component.html',
  styleUrls: ['./ConsultaUsuario.component.css']
})
export class ConsultaUsuarioComponent implements OnInit {
  UsuarioModel: any;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  public usuarios: UsuarioModel[] = [];

  getUsuarios() {
    this.usuarioService.getAll().subscribe(
      (listaUsuarios: UsuarioModel[]) => {
        this.usuarios = listaUsuarios;
        return this.usuarios;
      },
      (erro: any) => {
        console.error('Não foi possivel carregar os usuários.');
      }
    );
  }
}
