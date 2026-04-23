# Transactions

## 🎯 Sobre o Projeto

**Este é um projeto de estudo focado no sistema de rotas do Angular.**

Transactions é uma aplicação web desenvolvida em Angular 17 que simula um painel bancário pessoal. A aplicação permite visualizar informações cadastrais do usuário e o extrato de transações dos cartões de crédito e débito, com uma interface navegável e responsiva construída com SCSS e Material Symbols.

### 🛣️ Sistema de Roteamento - Nível Intermediário/Avançado

O projeto demonstra o uso de técnicas **intermediárias a avançadas** do sistema de rotas do Angular, incluindo:

- **Lazy Loading**: Carregamento sob demanda de componentes com `loadComponent` e `loadChildren` para otimização de performance
- **Rotas Aninhadas**: Estrutura de rotas pai-filho nas seções Geral e Transações com `<router-outlet>` secundário
- **Redirects e Navegação**: Configuração de redirecionamentos padrão em rotas vazias
- **Componentes Standalone**: Implementação moderna com lazy loading de componentes standalone do Angular 17
- **Code Splitting**: Arquivos de rotas separados (`geral.routes.ts` e `transacoes.routes.ts`) para melhor manutenibilidade
- **RouterLinkActive**: Destaque visual automático de itens de menu conforme a rota ativa

## ✨ Funcionalidades

- 🏠 **Início**: Tela inicial com acesso rápido às seções principais
- 👤 **Informações Gerais**: Dados cadastrais do usuário organizados em sub-abas:
  - **Básica** – Nome, data de nascimento, gênero e nacionalidade
  - **Contato** – Informações de contato
  - **Endereço** – Endereço do usuário
- 💳 **Transações**: Extrato de movimentações financeiras por tipo de cartão:
  - **Crédito** – Entradas no cartão de crédito
  - **Débito** – Saídas no cartão de débito
- 🔄 **Navegação Fluida**: Menu lateral (desktop) e menu superior (mobile) com Angular Router
- 🚀 **Componentes Standalone**: Arquitetura moderna do Angular 17

## 🛠️ Tecnologias Utilizadas

- **[Angular](https://angular.io/)** v17.3.0 - Framework principal
- **[TypeScript](https://www.typescriptlang.org/)** - Linguagem de programação
- **[SCSS](https://sass-lang.com/)** - Estilização dos componentes
- **[RxJS](https://rxjs.dev/)** - Programação reativa
- **[Material Symbols](https://fonts.google.com/icons)** - Ícones da interface

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm
- Angular CLI

### Passos para instalação

1. Clone o repositório:
```bash
git clone https://github.com/villarzz/transactions.git
cd transactions
```

2. Instale as dependências:
```bash
npm install
```

## 🚀 Como Usar

### Servidor de Desenvolvimento

Execute o comando abaixo para iniciar o servidor de desenvolvimento:

```bash
npm start
# ou
ng serve
```

Navegue para `http://localhost:4200/`. A aplicação será recarregada automaticamente quando você modificar os arquivos.

### Build de Produção

Para compilar o projeto para produção:

```bash
npm run build
# ou
ng build
```

Os arquivos compilados serão armazenados no diretório `dist/`.

### Testes

Execute os testes unitários via [Karma](https://karma-runner.github.io):

```bash
npm test
# ou
ng test
```

### Modo Watch

Para desenvolvimento contínuo com rebuild automático:

```bash
npm run watch
# ou
ng build --watch --configuration development
```

## 📁 Estrutura do Projeto

```
transactions/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── inicio/              # Tela inicial
│   │   │   ├── geral/               # Informações gerais do usuário
│   │   │   │   ├── components/
│   │   │   │   │   ├── basica/      # Dados básicos
│   │   │   │   │   ├── contato/     # Contato
│   │   │   │   │   └── endereco/    # Endereço
│   │   │   │   └── geral.routes.ts  # Rotas filhas de Geral
│   │   │   ├── transacoes/          # Transações financeiras
│   │   │   │   ├── components/
│   │   │   │   │   ├── credit/      # Extrato de crédito
│   │   │   │   │   └── debit/       # Extrato de débito
│   │   │   │   └── transacoes.routes.ts  # Rotas filhas de Transações
│   │   │   └── not-found/           # Página 404
│   │   ├── app.component.ts         # Componente raiz com menu de navegação
│   │   ├── app.routes.ts            # Rotas principais
│   │   └── app.config.ts            # Configuração da aplicação
│   ├── assets/                      # Recursos estáticos
│   └── styles.scss                  # Estilos globais
├── angular.json                     # Configuração do Angular CLI
└── package.json                     # Dependências do projeto
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto foi criado com [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.
