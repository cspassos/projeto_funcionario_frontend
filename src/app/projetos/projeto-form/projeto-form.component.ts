import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { ProjetoService } from '../../core/services/projeto.service';
import { FuncionarioService } from '../../core/services/funcionario.service';

@Component({
  selector: 'app-projeto-form',
  templateUrl: './projeto-form.component.html'
})
export class ProjetoFormComponent implements OnInit {
  id?: number;
  funcionariosOpcoes: { label: string; value: number }[] = [];

  form = this.fb.group({
    nome: ['', [Validators.required, Validators.maxLength(150)]],
    funcionariosIds: [[] as number[]]
  });

  constructor(
    private fb: FormBuilder,
    private projetoService: ProjetoService,
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router,
    private msg: MessageService
  ) {}

  ngOnInit(): void {
    this.carregarFuncionarios();

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = +idParam;
      this.projetoService.buscar(this.id).subscribe((p) => {
        this.form.patchValue({
          nome: p.nome,
          funcionariosIds: (p.funcionarios || []).map((f) => f.id!)
        });
      });
    }
  }

  private carregarFuncionarios(): void {
    this.funcionarioService.listar().subscribe((lista) => {
      this.funcionariosOpcoes = lista.map((f) => ({
        label: f.nome,
        value: f.id!
      }));
    });
  }

  salvar(): void {
    if (this.form.invalid) return;

    const body = this.form.value as any;
    const req = this.id
      ? this.projetoService.atualizar(this.id, body)
      : this.projetoService.salvar(body);

    req.subscribe(() => {
      this.msg.add({
        severity: 'success',
        summary: 'OK',
        detail: 'Salvo com sucesso'
      });
      this.router.navigate(['/projetos']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/projetos']);
  }
}