import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_BASE } from '../api';
import { ProjetoModel, ProjetoRequestDTO } from '../models/projeto.model';
import { FuncionarioModel } from '../models/funcionario.model';

@Injectable({ providedIn: 'root' })
export class ProjetoService {
  private api = `${API_BASE}/projetos`;

  constructor(private http: HttpClient) {}

  // CRUD
  listar(): Observable<ProjetoModel[]> {
    return this.http.get<ProjetoModel[]>(this.api);
  }

  buscar(id: number): Observable<ProjetoModel> {
    return this.http.get<ProjetoModel>(`${this.api}/${id}`);
  }

  salvar(body: ProjetoRequestDTO): Observable<ProjetoModel> {
    return this.http.post<ProjetoModel>(this.api, body);
  }

  atualizar(id: number, body: ProjetoRequestDTO): Observable<ProjetoModel> {
    return this.http.put<ProjetoModel>(`${this.api}/${id}`, body);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }

  // Relacionamentos
  funcionarios(id: number): Observable<FuncionarioModel[]> {
    return this.http.get<FuncionarioModel[]>(`${this.api}/${id}/funcionarios`);
  }
}