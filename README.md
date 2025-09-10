# Projeto Funcionário - Frontend

## 📌 Resumo
Este projeto é a **interface web** do sistema de gerenciamento de **funcionários** e **projetos**, desenvolvido em **Angular**.  

Ele consome a [API RESTful do Projeto Funcionário (back-end)](https://github.com/cspassos/projeto_funcionario_backend) e permite:
- **Cadastrar, editar, listar e excluir** funcionários e projetos.  
- Visualizar os **vínculos entre funcionários e projetos** (relação N para N).  
- Interface amigável utilizando **PrimeNG** (tabelas, formulários, notificações e diálogos de confirmação).  

> 🔗 Este repositório faz parte do **Projeto Funcionário**, complementando o back-end em **Spring Boot**.

---

## 🚀 Tecnologias utilizadas
- **Angular 17** → framework base do frontend.  
- **TypeScript** → linguagem principal.  
- **RxJS** → manipulação de Observables e chamadas assíncronas.  
- **PrimeNG 16** → componentes de UI (tabelas, formulários, diálogos, mensagens).  
- **PrimeIcons** → ícones da interface.  
- **Angular Router** → navegação entre páginas.  
- **HttpClient** → consumo da API RESTful.  

---

## 📂 Estrutura do projeto
- `core/services/` → serviços para integração com a API (`FuncionarioService`, `ProjetoService`).  
- `core/models/` → interfaces/modelos (`FuncionarioModel`, `ProjetoModel`).  
- `funcionarios/` → módulo com componentes de lista e formulário.  
- `projetos/` → módulo com componentes de lista e formulário.  
- `app-routing.module.ts` → configuração de rotas.  

---

## ▶️ Como rodar a aplicação

### 1. Clonar o repositório
```bash
git clone https://github.com/cspassos/projeto_funcionario_frontend.git
cd projeto-funcionario-frontend
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Rodar o servidor de desenvolvimento
```bash
ng serve
```

Acesse:  
👉 http://localhost:4200  

---

## ⚙️ Integração com o Back-End

O front consome a API do projeto back-end em `http://localhost:8080/api`.  

Caso a API rode em outra URL/porta, configure em `environment.ts`:  

```typescript
export const environment = {
  production: false,
  API_BASE: 'http://localhost:8080/api'
};
```

---

## 📖 Funcionalidades

### Funcionários
- Listar todos  
- Cadastrar novo  
- Editar existente  
- Excluir com confirmação  
- Ver projetos vinculados  

### Projetos
- Listar todos  
- Cadastrar novo  
- Editar existente  
- Excluir com confirmação  
- Vincular funcionários  

---

## 🖼️ Telas principais
- **Lista de Funcionários** → tabela com ações de editar/excluir.  
- **Formulário de Funcionário** → cadastro/edição com validações.  
- **Lista de Projetos** → tabela com funcionários vinculados.  
- **Formulário de Projeto** → cadastro/edição com multiselect de funcionários.  

---

## ✅ Conclusão
Este frontend Angular complementa o **Projeto Funcionário**:  
- Consome a **API RESTful** em Spring Boot.  
- Implementa as operações de **CRUD** para funcionários e projetos.  
- Fornece uma interface amigável com **PrimeNG**.  

> 🔗 Para rodar a aplicação completa, é necessário também o [Projeto Funcionário - Back-End](../projeto-funcionario-backend).  
