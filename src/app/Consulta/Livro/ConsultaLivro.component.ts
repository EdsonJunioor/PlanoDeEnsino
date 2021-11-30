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

  public livrosFiltrados: LivroModel[] = []
  private _filtrar: string = ''

  public get filtrar(): string {
    return this._filtrar;
  }

  public set filtrar(value: string) {
    this._filtrar = value;
    this.livrosFiltrados = this.filtrar ? this.filtrarLivros(this.filtrar) : this.livros
  }

  filtrarLivros(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.livros.filter(
      livro => livro.dsLivro.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }

  getLivros() {
    this.livroService.getAll().subscribe(
      (listaLivros: LivroModel[]) => {
        this.livros = listaLivros;
        this.livrosFiltrados = this.livros;
      },
      (erro: any) => {
        console.error('Não foi possivel carregar os livros.');
      }
    );
  }
}
