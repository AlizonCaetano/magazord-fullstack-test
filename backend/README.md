# Magazord Fullstack Test (Backend)

## Objetivo

Criar um backend que suporte um sistema de gerenciamento de pessoas e seus contatos, cumprindo requisitos funcionais, não funcionais e de negócio pré definidos para o teste técnico.

## Requisitos Funcionais (Backend)

- RF04: Manter CRUD de pessoas
- RF05: Manter CRUD de contatos
- RF02: Suportar busca de pessoas por nome

## Requisitos Não Funcionais (Backend)

- RNF01: Backend desenvolvido em NodeJS
- RNF04: Comunicação via API REST no padrão MVC
- RNF05: APIs com autenticação JWT
- RNF06: Banco de dados PostgreSQL
- RNF08: Migrations para controle do banco de dados
- RNF09: Execução via Docker e Docker Compose

## Regras de Negócio

- RN01: Dados de pessoa: Nome e CPF
- RN02: Dados de contato: Tipo (Telefone ou Email) e Descrição
- RN03: Uma pessoa pode ter vários contatos

## Decisões Técnicas (Backend)

- **Informações do backend:** Minha stack de maior familiaridade é voltado ao javascript, portanto estou alinhado com Node.js e com o framework Express por conta de projetos academicos.

- **Banco de dados:** PostgreSQL é um tema recorrente nas disciplinas do meu curso de engenharia e optei por conta da familiariade por eventuais resoluções de problemas e testes, entendo que a estrutura deve seguir com uso de SQL como estrutura principal ao invés de NoSQL, dada a origem e necessidade de organização dos dados.

- **Padrão de autenticação:** JWT (JSON Web Token) é amplamente usado em cursos iniciantes devido a facilidade de implementação pela equipe num geral, usar para privar as rotas e realizar uma autenticação que carregue uma chave que permita o acesso as rotas privadas, meio mais simples que conheço.

- **Padrão de arquitetura:** MVC é um padrão clássico e conhecido, que separa as responsabilidades em camadas, facilitando a organização do código e a manutenção do projeto.

- **ORM:** Sequelize acaba sendo um orm conhecido em projetos node, ampla documentação e maturidade de mercado.
