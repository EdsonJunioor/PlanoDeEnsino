import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { UsuarioModel } from './../Models/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = environment.domain + 'usuario';

  constructor(private http: HttpClient) { }

  post(usuario: UsuarioModel){
    return this.http.post(`${this.url}`, usuario);
  }

  getAll(): Observable<UsuarioModel[]>{
    return this.http.get<UsuarioModel[]>(`${this.url}`);
  }

  getUsuarioById(id: number): Observable<UsuarioModel>{
    return this.http.get<UsuarioModel>(`${this.url}/${id}`);
  }

  getUsuarioByNome(nome: string): Observable<UsuarioModel[]>{
    return this.http.get<UsuarioModel[]>(`${this.url}/${nome}`);
  }

  put(id: number, usuario: UsuarioModel): Observable<any>{
    return this.http.put(`${this.url}/EditarUsuario/${id}`, usuario);
  }
}
