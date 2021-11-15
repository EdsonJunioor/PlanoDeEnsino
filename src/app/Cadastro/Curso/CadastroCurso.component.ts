import { Component, OnInit } from '@angular/core';
import { CursoModel } from './../../Models/CursoModel';
import { CursoService } from './../../Services/Curso.service';

@Component({
  selector: 'app-CadastroCurso',
  templateUrl: './CadastroCurso.component.html',
  styleUrls: ['./CadastroCurso.component.css']
})
export class CadastroCursoComponent implements OnInit {

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.carregarCursos();
  }

  public cursos: CursoModel[] = [];
  public curso = new CursoModel;

  salvarCurso() {
    this.cursoService.post(this.curso).subscribe((resposta) => {
      this.curso = new CursoModel();
    }
    );
    this.carregarCursos();
  }

  carregarCursos(){
    this.cursoService.getAll().subscribe(
      (listaCursos: CursoModel[]) =>{
        this.cursos = listaCursos;
        return this.cursos;
      },
      (erro: any) => {
        console.error('Não foi possível carregar os cursos.');
      }
    );
  }
}