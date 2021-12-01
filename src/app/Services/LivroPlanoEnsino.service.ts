import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { PlanoEnsinoModel } from '../Models/PlanoEnsinoModel';
import { LivroModel } from '../Models/LivroModel';
import { LivroPlanoEnsinoModel } from './../Models/LivroPlanoEnsino';

@Injectable({
  providedIn: 'root',
})
export class LivroPlanoEnsinoService {
  url = environment.domain + 'livroplanoensino';

  public livro = new LivroModel();
  public plano = new PlanoEnsinoModel();
  public livroPlano = new LivroPlanoEnsinoModel();

  constructor(private http: HttpClient) { }

  post(livroPlanoEnsino = {cdLivro: this.livro.cdLivro, cdDisciplina: this.plano.cdDisciplina, tpBibliografia: this.livroPlano.tpBibliografia}) {
    return this.http.post(`${this.url}`, livroPlanoEnsino); //Dentro do post está sendo criado um array com duas informações, estas vão aparecer no corpo da requisição
  }                                                          //para tratamento do backend e assim, inserção no banco de dados

  delete(livro: LivroModel, plano: PlanoEnsinoModel) {
    return this.http.delete(`${this.url}/${livro.cdLivro}/${plano.cdDisciplina}`);
  }
}