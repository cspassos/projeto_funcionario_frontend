import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { FuncionarioService } from '../../core/services/funcionario.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html'
})
export class FuncionarioFormComponent implements OnInit {
  id?: number;

  form = this.fb.group({
    nome: ['', [Validators.required, Validators.maxLength(150)]],
    cpf: ['', [Validators.required, Validators.maxLength(11)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(150)]],
    salario: [0, [Validators.required, Validators.min(0)]]
  });

  constructor(
    private fb: FormBuilder,
    private service: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router,
    private msg: MessageService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.id = +idParam;
      this.service.buscar(this.id).subscribe((f) => {
        this.form.patchValue(f as any);
      });
    }
  }

  salvar(): void {
    if (this.form.invalid) return;

    const body = this.form.value as any;
    const req = this.id
      ? this.service.atualizar(this.id, body)
      : this.service.salvar(body);

    req.subscribe(() => {
      this.msg.add({
        severity: 'success',
        summary: 'OK',
        detail: 'Salvo com sucesso'
      });
      this.router.navigate(['/funcionarios']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/funcionarios']);
  }
}