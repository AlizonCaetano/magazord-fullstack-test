# Magazord Fullstack Test

## Objetivo

Criar um backend que suporte um sistema de gerenciamento de pessoas e seus contatos, cumprindo requisitos funcionais, não funcionais e de negócio pré definidos para o teste técnico.

## Requisitos Funcionais

- RF01: O sistema deve manter uma tela de consulta para pessoas
- RF02: O sistema deve manter um campo de pesquisa por nome de pessoa
- RF03: O sistema deve manter uma tela de consulta para contatos
- RF04: O sistema deve manter um CRUD para pessoas
- RF05: O sistema deve manter um CRUD para contatos

## Requisitos Não Funcionais

- RNF01: Backend desenvolvido em NodeJS
- RNF02: Frontend desenvolvido em Vue.js
- RNF03: O sistema deve ser responsivo
- RNF04: Comunicação via API REST no padrão MVC
- RNF05: APIs com autenticação JWT
- RNF06: Banco de dados PostgreSQL
- RNF07: Controle de versão no GitHub
- RNF08: Migrations para controle do banco de dados
- RNF09: Execução via Docker e Docker Compose

## Regras de Negócio

- RN01: Dados de pessoa: Nome e CPF
- RN02: Dados de contato: Tipo (Telefone ou Email) e Descrição
- RN03: Uma pessoa pode ter vários contatos
