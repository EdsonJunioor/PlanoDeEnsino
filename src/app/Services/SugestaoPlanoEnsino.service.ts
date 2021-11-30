import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { SugestaoPlanoEnsinoModel } from './../Models/SugestaoPlanoEnsinoModel';

@Injectable({
  providedIn: 'root',
})
export class SugestaoPlanoEnsinoService {
  url = environment.domain + 'sugestaoplanoensino';

  constructor(private http: HttpClient) { }

  post(sugestaoplano: SugestaoPlanoEnsinoModel) {
    return this.http.post(`${this.url}`, sugestaoplano);
  }

  put(sugestaoplano: SugestaoPlanoEnsinoModel) {
    return this.http.put(`${this.url}`, sugestaoplano);
  }

  getAll(): Observable<SugestaoPlanoEnsinoModel[]> {
    return this.http.get<SugestaoPlanoEnsinoModel[]>(`${this.url}`);
  }

  delete(sugestaoPlano: SugestaoPlanoEnsinoModel) {
    return this.http.delete(`${this.url}/${sugestaoPlano.cdSugestaoPlanoEnsino}`);
  }
}