import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { LivroModel } from './../Models/LivroModel';
import { AutorModel } from './../Models/AutorModel';

@Injectable({
  providedIn: 'root',
})
export class LivroAutorService {
  url = environment.domain + 'livroautor';

  public livro = new LivroModel();
  public autor = new AutorModel();

  constructor(private http: HttpClient) { }

  post(livroAutor = {cdLivro: this.livro.cdLivro, cdAutor: this.autor.cdAutor}) {
    return this.http.post(`${this.url}`, livroAutor); //Dentro do post está sendo criado um array com duas informações, estas vão aparecer no corpo da requisição
  }                                                   //para tratamento do backend e assim, inserção no banco de dados

  getAll(): Observable<LivroModel[]> {
    return this.http.get<LivroModel[]>(`${this.url}`);
  }
}
