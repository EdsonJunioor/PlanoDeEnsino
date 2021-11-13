import { LivroModel } from './../../Models/LivroModel';
import { LivroService } from './../../Services/Livro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-CadastroLivro',
  templateUrl: './CadastroLivro.component.html',
  styleUrls: ['./CadastroLivro.component.css'],
})
export class CadastroLivroComponent implements OnInit {

  constructor(private livroService: LivroService) { }

  ngOnInit() {
    this.carregarLivros();
  }

  public livros: LivroModel[] = [];
  public livro = new LivroModel();

  salvarLivro() {
    this.livroService.post(this.livro).subscribe((resposta) => {
      this.livro = new LivroModel();
    }
    );
    this.carregarLivros();
  }

  carregarLivros() {
    this.livroService.getAll().subscribe(
      (listaLivros: LivroModel[]) => {
        this.livros = listaLivros;
        return this.livros;
      },
      (erro: any) => {
        console.error('Não foi possivel carregar os livros.');
      }
    );
  }
}
