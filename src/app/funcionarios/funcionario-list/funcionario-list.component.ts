import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

import { FuncionarioService } from '../../core/services/funcionario.service';
import { FuncionarioModel } from '../../core/models/funcionario.model';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html'
})
export class FuncionarioListComponent implements OnInit {
  funcionarios: FuncionarioModel[] = [];
  loading = false;

  constructor(
    private service: FuncionarioService,
    private confirm: ConfirmationService,
    private msg: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregar();
  }

  carregar(): void {
    this.loading = true;

    this.service.listar().subscribe({
      next: (data) => {
        this.funcionarios = data;
        this.loading = false;
      },
      error: () => {
        this.msg.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Falha ao carregar'
        });
        this.loading = false;
      }
    });
  }

  novo(): void {
    this.router.navigate(['/funcionarios/novo']);
  }

  editar(id: number): void {
    this.router.navigate(['/funcionarios', id]);
  }

  deletar(id: number): void {
    this.confirm.confirm({
      message: 'Confirmar exclusão?',
      accept: () => {
        this.service.deletar(id).subscribe(() => {
          this.msg.add({
            severity: 'success',
            summary: 'OK',
            detail: 'Excluído'
          });
          this.carregar();
        });
      }
    });
  }
}