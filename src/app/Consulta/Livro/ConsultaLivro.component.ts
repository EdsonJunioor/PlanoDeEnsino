import { LivroModel } from './../../Models/LivroModel';
import { LivroService } from './../../Services/Livro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ConsultaLivro',
  templateUrl: './ConsultaLivro.component.html',
  styleUrls: ['./ConsultaLivro.component.css'],
})
export class ConsultaLivroComponent implements OnInit {
  LivroModel: any;
  constructor(private livroService: LivroService) { }

  ngOnInit() {
    this.getLivros();
  }

  public livros: LivroModel[] = [];

  getLivros() {
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
