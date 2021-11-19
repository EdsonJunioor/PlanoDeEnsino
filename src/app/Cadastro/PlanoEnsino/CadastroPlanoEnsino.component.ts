import { CursoService } from './../../Services/Curso.service';
import { CursoModel } from './../../Models/CursoModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-CadastroPlanoEnsino',
  templateUrl: './CadastroPlanoEnsino.component.html',
  styleUrls: ['./CadastroPlanoEnsino.component.css']
})
export class CadastroPlanoEnsinoComponent implements OnInit {

  public cursos: CursoModel[] = [];

  getCursos() {
    this.cursoService.getAll().subscribe(
      (listaCursos: CursoModel[]) => {
        this.cursos = listaCursos;
        return this.cursos;
      },
      (erro: any) => {
        console.error('Não foi possível carregar os cursos.');
      }
    );
  }

  // public cursoID: number = 0;

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.getCursos();
  }


}
