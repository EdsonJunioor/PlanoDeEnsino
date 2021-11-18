import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from './../../Models/UsuarioModel';
import { UsuarioService } from './../../Services/Usuario.service';

@Component({
  selector: 'app-CadastroUsuario',
  templateUrl: './CadastroUsuario.component.html',
  styleUrls: ['./CadastroUsuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.carregarUsuarios();
  }

  public usuarios: UsuarioModel[] = [];
  public usuario = new UsuarioModel;
  public usuarioSelecionado!: UsuarioModel;

  // usuarios = [
  //   { nome:'Edson Junior', login:'edson.junior@athon.com', tipoUsuario: 'Professor', status: 'Ativo' },
  //   { nome:'Felipe Gallonetti', login:'felipe.gallonetti@athon.com', tipoUsuario: 'Professor', status: 'Ativo' },
  //   { nome:'Gustavo Gama', login:'gustavo.gama@athon.com', tipoUsuario: 'Professor', status: 'Ativo' },
  //   { nome:'Gustavo Clareti', login:'gustavo.clareti@athon.com', tipoUsuario: 'Professor', status: 'Ativo' }
  // ];

  carregarUsuarios(){
    this.usuarioService.getAll().subscribe(
      (listaUsuarios: UsuarioModel[]) =>{
        this.usuarios = listaUsuarios;
        return this.usuarios;
      },
      (erro: any) => {
        console.error('Não foi possível carregar os usuários.');
      }
    );
  }

  salvarUsuario(){
    this.usuarioService.post(this.usuario).subscribe(resposta => {
      this.usuario = new UsuarioModel;
      this.carregarUsuarios();
    });
  }

  editarUsuario(){
    var id = this.usuarioSelecionado.cdUsuario;
    this.usuarioService.put(id, this.usuario).subscribe( resposta => {
      this.carregarUsuarios();
    });
    this.limparCampos();
  }

  selecionarUsuario(usuario: UsuarioModel){
    this.usuarioSelecionado = usuario;
    if(this.usuarioSelecionado){
      this.usuario = this.usuarioSelecionado;
    }
  }

  buscarUsuarioById(){
    var id = this.usuarioSelecionado.cdUsuario;
    var usuarioRetornado = this.usuarioService.getUsuarioById(id).subscribe(
      (resposta: UsuarioModel) => {
        this.usuario = resposta;
        return this.usuario;
      },
      (erro: any) => {
        console.error('Não foi possível buscar um usuário');
      }
    );
    return usuarioRetornado;
  }

  limparCampos(){
    this.usuario = new UsuarioModel;
  }


}
