import { LivroModel } from './../../Models/LivroModel';
import { LivroService } from './../../Services/Livro.service';
import { Component, OnInit } from '@angular/core';
import { AutorModel } from './../../Models/AutorModel';
import { AutorService } from './../../Services/Autor.service';
import { LivroAutorService } from 'src/app/Services/LivroAutor.service';
@Component({
  selector: 'app-CadastroLivro',
  templateUrl: './CadastroLivro.component.html',
  styleUrls: ['./CadastroLivro.component.css'],
})
export class CadastroLivroComponent implements OnInit {
  LivroModel: any;
  AutorModel: any;
  constructor(private livroService: LivroService,
    private autorService: AutorService,
    private livroAutorService: LivroAutorService) { }

  ngOnInit() {
    this.getLivros();
    this.getAutores();
  }

  public livros: LivroModel[] = [];
  public livro = new LivroModel;
  public mostrarListaLivro: boolean = true;
  public dadosLivros = [];
  pagLivro: number = 1;
  contadorLivro: number = 5;
  paginaAtualLivro: number = 1;

  public autores: AutorModel[] = [];
  public autor = new AutorModel;
  public mostrarListaAutor: boolean = true;
  public dadosAutores = [];
  pagAutor: number = 1;
  contadorAutor: number = 5;
  paginaAtualAutor: number = 1;

  saveLivro() {
    if (this.livro.cdLivro) {
      this.putLivro();
    } else {
      this.postLivro();
    }
  }

  saveAutor() {
    if (this.autor.cdAutor) {
      this.putAutor();
    } else {
      this.postAutor();
    }
  }

  saveLivroAutor(){
    if(this.livro.cdLivro && this.autor.cdAutor){
      this.postLivroAutor();
    }
  }

  postLivro() {
    this.livroService.post(this.livro).subscribe((resposta) => {
      this.livro = new LivroModel();
    }
    );
    alert('Livro cadastrado com sucesso!');
    this.getLivros();
  }

  postAutor() {
    this.autorService.post(this.autor).subscribe((resposta) => {
      this.autor = new AutorModel();
    }
    );
    alert('Autor cadastrado com sucesso!');
    this.getAutores();
  }
  
  postLivroAutor() {
      var livroAutor = {cdLivro: this.livro.cdLivro, cdAutor: this.autor.cdAutor}; //variável criada para atribuição de valores após seleção na tela de livro e de autor
      //realização do post diretamente com a variável criada acima
      this.livroAutorService.post(livroAutor).subscribe((resposta) => {
    }
    );
    alert('Livro e Autor linkados com sucesso!');
  }

  putLivro() {
    this.livroService.put(this.livro).subscribe((resposta) => {
      this.livro = new LivroModel();
    }
    );
    alert('Livro editado com sucesso!');
    this.getLivros();
  }

  putAutor() {
    this.autorService.put(this.autor).subscribe((resposta) => {
      this.autor = new AutorModel();
    }
    );
    alert('Autor editado com sucesso!');
    this.getAutores();
  }

  getLivros() {
    this.livroService.getAll().subscribe(
      (listaLivros: LivroModel[]) => {
        this.livros = listaLivros;
        return this.livros;
      },
      (erro: any) => {
        console.error('Não foi possível carregar os livros.');
      }
    );
  }

  getAutores() {
    this.autorService.getAll().subscribe(
      (listaAutores: AutorModel[]) => {
        this.autores = listaAutores;
        return this.autores;
      },
      (erro: any) => {
        console.error('Não foi possível carregar os autores.');
      }
    );
  }

  abrirDetalhesLivro(livro: LivroModel) {
    this.mostrarListaLivro = true;
    this.livro = livro;
  }

  abrirDetalhesAutor(autor: AutorModel) {
    this.mostrarListaAutor = true;
    this.autor = autor;
  }
}