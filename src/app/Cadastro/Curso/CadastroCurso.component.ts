import { Component, OnInit } from '@angular/core';
import { CursoModel } from './../../Models/CursoModel';
import { CursoService } from './../../Services/Curso.service';

@Component({
  selector: 'app-CadastroCurso',
  templateUrl: './CadastroCurso.component.html',
  styleUrls: ['./CadastroCurso.component.css']
})
export class CadastroCursoComponent implements OnInit {
  CursoModel: any;
  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.getCursos();
  }

  public cursos: CursoModel[] = [];
  public curso = new CursoModel;
  public mostrarListaCurso: boolean = true;
  public dadosCursos = [];
  pagCurso: number = 1;
  contadorCurso: number = 5;
  paginaAtualCurso: number = 1;

  saveCurso() {
    if(this.curso.cdCurso) {
      this.putCurso();
    } else {
      this.postCurso();
    }
  }

  postCurso() {
    this.cursoService.post(this.curso).subscribe((resposta) => {
      this.curso = new CursoModel();
    }
    );
    alert('Curso cadastrado com sucesso!');
    this.getCursos();
  }

  putCurso() {
    this.cursoService.put(this.curso).subscribe((resposta) => {
      this.curso = new CursoModel();
    }
    );
    alert('Curso atualizado com sucesso!');
    this.getCursos();
  }

  getCursos(){
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

  abrirDetalhesCurso(curso: CursoModel) {
    this.mostrarListaCurso = true;
    this.curso = curso;
  }
}