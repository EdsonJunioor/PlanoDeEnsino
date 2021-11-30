import { CursoPlanoEnsinoService } from './../../Services/CursoPlanoEnsino.service';
import { CursoPlanoEnsino } from './../../Models/CursoPlanoEnsino';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ConsultaPlanoEnsino',
  templateUrl: './ConsultaPlanoEnsino.component.html',
  styleUrls: ['./ConsultaPlanoEnsino.component.css']
})
export class ConsultaPlanoEnsinoComponent implements OnInit {

  constructor(private cursoPlanoEnsinoService: CursoPlanoEnsinoService) { }

  ngOnInit() {
    this.getPlanosDeEnsino();
  }


  getPlanosDeEnsino() {
    this.cursoPlanoEnsinoService.getAll().subscribe(
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
