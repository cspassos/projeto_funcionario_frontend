import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

import { ProjetoService } from '../../core/services/projeto.service';
import { ProjetoModel } from '../../core/models/projeto.model';

@Component({
  selector: 'app-projeto-list',
  templateUrl: './projeto-list.component.html'
})
export class ProjetoListComponent implements OnInit {
  projetos: ProjetoModel[] = [];
  loading = false;

  constructor(
    private service: ProjetoService,
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
        this.projetos = data;
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
    this.router.navigate(['/projetos/novo']);
  }

  editar(id: number): void {
    this.router.navigate(['/projetos', id]);
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

  nomesFuncionarios(p: ProjetoModel): string {
    return (p.funcionarios?.map((f) => f.nome) ?? []).join(', ');
  }
}