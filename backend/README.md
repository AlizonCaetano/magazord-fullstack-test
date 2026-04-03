# Magazord Fullstack Test (Backend)

## Objetivo

Criar um backend que suporte um sistema de gerenciamento de pessoas e seus
contatos, cumprindo requisitos funcionais, não funcionais e de negócio
pré-definidos para o teste técnico.

## Arquitetura

O projeto segue o padrão MVC desacoplado. Model e Controller são
responsabilidade do backend, enquanto a View é uma aplicação frontend
independente desenvolvida em Vue.js. A comunicação entre as camadas acontece
via API REST, onde o frontend consome os endpoints do backend através de
requisições HTTP com troca de dados em JSON.

Essa separação permite que backend e frontend evoluam de forma independente,
além de possibilitar no futuro o consumo da mesma API por outros clientes,
como aplicações mobile.

## Requisitos Funcionais (Backend)

- RF02: Suportar busca de pessoas por nome
- RF04: Manter CRUD de pessoas
- RF05: Manter CRUD de contatos

## Requisitos Não Funcionais (Backend)

- RNF01: Backend desenvolvido em NodeJS
- RNF04: Comunicação via API REST no padrão MVC
- RNF05: APIs com autenticação JWT
- RNF06: Banco de dados PostgreSQL
- RNF08: Migrations para controle do banco de dados
- RNF09: Execução via Docker e Docker Compose

## Regras de Negócio

- RN01: Dados de pessoa: Nome e CPF
- RN02: Dados de contato: Tipo e Descrição
- RN03: Uma pessoa pode ter vários contatos

## Decisões Técnicas e Novos Requisitos

- **Backend:** Node.js com Express, stack de maior familiaridade por conta
  de projetos acadêmicos, permitindo desenvolvimento mais ágil.

- **Banco de dados:** PostgreSQL, tema recorrente nas disciplinas do curso
  de Engenharia de Software. A natureza relacional dos dados — pessoas com
  múltiplos contatos — justifica o uso de SQL em vez de NoSQL.

- **Autenticação:** JWT (JSON Web Token) para autenticação stateless via
  token nas rotas privadas. A tabela `auth_persons` foi criada separada de
  `persons` para isolar dados de acesso dos dados de negócio. Inclui controle
  de escopos via campo `role` (ENUM: `admin` e `viewer`), onde administradores
  têm acesso ao CRUD completo e viewers apenas à consulta.

- **Tipo de contato:** ENUM extensível no banco de dados, iniciando com
  `phone` e `email`, projetado para suportar novos tipos futuramente como
  telefone pessoal, telefone empresarial e email pessoal.

- **Padrão de arquitetura:** MVC desacoplado — Controllers e Models no
  backend, View no frontend. Separação de responsabilidades clara entre
  as duas aplicações.

- **ORM:** Sequelize, ORM maduro no ecossistema Node com suporte nativo
  a migrations e ampla documentação.

### Estrutura de Pastas

```
backend/
├── config/
│   └── database.js        # configuração do Sequelize com variáveis de ambiente
├── src/
│   ├── controllers/       # lógica de negócio de cada entidade
│   ├── middlewares/       # autenticação JWT e controle de escopos
│   ├── migrations/        # versionamento do banco de dados
│   ├── models/            # entidades e relacionamentos do Sequelize
│   ├── routes/            # definição dos endpoints da API
│   └── seeders/           # dados iniciais para desenvolvimento
├── .env                   # variáveis de ambiente (não versionado)
├── .env.example           # template das variáveis de ambiente
├── .sequelizerc           # configuração de paths do Sequelize CLI
└── package.json           # dependências e scripts do projeto
```

## Como rodar o projeto

_(será preenchido ao final do desenvolvimento)_
