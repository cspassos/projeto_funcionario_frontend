import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuncionarioListComponent } from './funcionarios/funcionario-list/funcionario-list.component';
import { FuncionarioFormComponent } from './funcionarios/funcionario-form/funcionario-form.component';
import { ProjetoListComponent } from './projetos/projeto-list/projeto-list.component';
import { ProjetoFormComponent } from './projetos/projeto-form/projeto-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'funcionarios', pathMatch: 'full' },

  // Funcionários
  { path: 'funcionarios', component: FuncionarioListComponent },
  { path: 'funcionarios/novo', component: FuncionarioFormComponent },
  { path: 'funcionarios/:id', component: FuncionarioFormComponent },

  // Projetos
  { path: 'projetos', component: ProjetoListComponent },
  { path: 'projetos/novo', component: ProjetoFormComponent },
  { path: 'projetos/:id', component: ProjetoFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}