import { LivroModel } from './../../Models/LivroModel';
import { LivroService } from './../../Services/Livro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-CadastroLivro',
  templateUrl: './CadastroLivro.component.html',
  styleUrls: ['./CadastroLivro.component.css'],
})
export class CadastroLivroComponent implements OnInit {
  LivroModel: any;

  constructor(private livroService: LivroService) { }

  public livros: LivroModel[] = [];
  public livro = new LivroModel();
  public mostrarLista: boolean = true;

  public dadosAlunos = [];
  pag: number = 1;
  contador: number = 5;
  paginaAtual: number = 1;

  ngOnInit() {
    this.carregarLivros();
  }

  salvar() {
    if (this.livro) {
      this.editarLivro();
    } else {
      this.cadastrarLivro();
    }
  }

  cadastrarLivro() {
    this.livroService.post(this.livro).subscribe((resposta) => {
      if (resposta) {
        this.livro = new LivroModel();
        alert('Livro cadastrado com sucesso!');
        // this.livro = {}        //Esvaziar campos da tela
      } else {
        alert('Não foi possivel salvar o livro.');
      }
    },
      (erro) => {
        alert('Erro interno do sistema');   //Por que esta caindo nesta condição?
      }
    );
    this.carregarLivros();
  }

  editarLivro() {
    this.livroService.put(this.livro).subscribe((resposta) => {
      if (resposta) {
        alert('Livro editado com sucesso!');
        // this.livro = {}        //Esvaziar campos da tela
      } else {
        alert('Não foi possivel editar o livro.');
      }
    },
      (erro) => {
        alert('Erro interno do sistema');   //Por que esta caindo nesta condição?
      }
    );
    this.carregarLivros();
  }

  // editarLivro() {
  //   var id = this.livro.cdLivro;
  //   var livro = this.livroService.getByID(id);
  //   if (livro) {
  //     this.livroService.put(this.livro).subscribe(resposta => {
  //       console.log(resposta);
  //       alert("Livro editado");
  //       this.carregarLivros();
  //     });
  //   }
  //   else {
  //     console.log('Erroooouu');
  //   }
  //   // this.limparCampo();
  // }

  abrirDetalhes(livro: LivroModel) {
    this.mostrarLista = true;
    this.livro = livro;
  }

  carregarLivros() {
    this.livroService.getAll().subscribe((listaLivros: LivroModel[]) => {
      this.livros = listaLivros;
      return this.livros;
    },
      (erro: any) => {
        alert('Erro interno do sistema');
      }
    );
  }
}
