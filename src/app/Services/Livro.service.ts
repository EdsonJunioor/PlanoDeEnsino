import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { LivroModel } from '../Models/LivroModel';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  url = environment.domain + 'livro';

  constructor(private http: HttpClient) { }

  post(livro: LivroModel) {
    return this.http.post(`${this.url}`, livro);
  }

  getAll(): Observable<LivroModel[]> {
    return this.http.get<LivroModel[]>(`${this.url}`);
  }
}
