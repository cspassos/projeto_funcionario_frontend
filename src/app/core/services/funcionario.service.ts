import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_BASE } from '../api';
import { FuncionarioModel } from '../models/funcionario.model';

@Injectable({ providedIn: 'root' })
export class FuncionarioService {
  private api = `${API_BASE}/funcionarios`;

  constructor(private http: HttpClient) {}

  // CRUD
  listar(): Observable<FuncionarioModel[]> {
    return this.http.get<FuncionarioModel[]>(this.api);
  }

  buscar(id: number): Observable<FuncionarioModel> {
    return this.http.get<FuncionarioModel>(`${this.api}/${id}`);
  }

  salvar(body: FuncionarioModel): Observable<FuncionarioModel> {
    return this.http.post<FuncionarioModel>(this.api, body);
  }

  atualizar(id: number, body: FuncionarioModel): Observable<FuncionarioModel> {
    return this.http.put<FuncionarioModel>(`${this.api}/${id}`, body);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }

  // Relacionamentos
  projetos(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/${id}/projetos`);
  }

  projetosResumo(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/${id}/projetos-resumo`);
  }
}