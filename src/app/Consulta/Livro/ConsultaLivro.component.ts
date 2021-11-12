import { LivroModel } from './../../Models/LivroModel';
import { LivroService } from './../../Services/Livro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ConsultaLivro',
  templateUrl: './ConsultaLivro.component.html',
  styleUrls: ['./ConsultaLivro.component.css'],
})
export class ConsultaLivroComponent implements OnInit {

  constructor(private livroService: LivroService) { }

  ngOnInit() {
    this.carregarLivros();
  }

  public livros: LivroModel[] = [];
  public livro = new LivroModel();

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
