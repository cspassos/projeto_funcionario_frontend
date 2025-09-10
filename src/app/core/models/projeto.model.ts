import { FuncionarioModel } from './funcionario.model';

export interface ProjetoModel {
  id?: number;
  nome: string;
  dataCriacao?: string;
  funcionarios?: FuncionarioModel[];
}

export interface ProjetoRequestDTO {
  nome: string;
  funcionariosIds: number[] | null;
}