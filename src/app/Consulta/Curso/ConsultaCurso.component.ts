import { Component, OnInit } from '@angular/core';
import { CursoModel } from './../../Models/CursoModel';
import { CursoService } from './../../Services/Curso.service';

@Component({
  selector: 'app-ConsultaCurso',
  templateUrl: './ConsultaCurso.component.html',
  styleUrls: ['./ConsultaCurso.component.css']
})
export class ConsultaCursoComponent implements OnInit {
  CursoModel: any;
  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.getCursos();
  }

  public cursos: CursoModel[] = [];

  getCursos() {
    this.cursoService.getAll().subscribe(
      (listaCursos: CursoModel[]) => {
        this.cursos = listaCursos;
        return this.cursos;
      },
      (erro: any) => {
        console.error('Não foi possivel carregar os cursos.');
      }
    );
  }
}
