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

  ngOnInit() { }

  public livros: LivroModel[] = [];
  public livro = new LivroModel();

  salvarLivro() {
    this.livroService
      .post(this.livro)
      .subscribe(
        (resposta) => {
          this.livro = new LivroModel();
        }
      );
  }
}
