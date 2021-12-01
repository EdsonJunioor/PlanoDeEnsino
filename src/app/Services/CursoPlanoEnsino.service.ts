import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { CursoModel } from '../Models/CursoModel';
import { PlanoEnsinoModel } from '../Models/PlanoEnsinoModel';
import { UsuarioModel } from './../Models/UsuarioModel';

@Injectable({
  providedIn: 'root',
})
export class CursoPlanoEnsinoService {
  url = environment.domain + 'cursoplanoensino';

  public curso = new CursoModel();
  public plano = new PlanoEnsinoModel();

  constructor(private http: HttpClient) { }

  post(cursoPlanoEnsino = {cdCurso: this.curso.cdCurso, cdDisciplina: this.plano.cdDisciplina}) {
    return this.http.post(`${this.url}`, cursoPlanoEnsino); //Dentro do post está sendo criado um array com duas informações, estas vão aparecer no corpo da requisição
  }                                                         //para tratamento do backend e assim, inserção no banco de dados

  delete(curso: CursoModel, plano: PlanoEnsinoModel) {
    return this.http.delete(`${this.url}/${curso.cdCurso}/${plano.cdDisciplina}`);
  }
}