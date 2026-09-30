# BD3 - Atividade Extra

## Banco de Dados NoSQL - MongoDB

**Aluno:** Eduardo Silva  
**Curso:** Técnico em Desenvolvimento de Sistemas  
**Componente curricular:** Banco de Dados 3

---

## Tema

Gestão de Almoxarifado e Suprimentos (Estoque).

## Objetivo

Realizar operações básicas de manipulação e consulta de dados utilizando o MongoDB, trabalhando com banco de dados orientado a documentos (NoSQL).

## Banco de Dados

**Banco:** `BD-EMPRESA`

**Collection:** `ESTOQUE`

## Atividades realizadas

### Etapa 1 - Criação do Banco de Dados e Collection

Foi criado o banco de dados `BD-EMPRESA` e a collection `ESTOQUE` utilizando `use()` e `db.createCollection()`.

### Etapa 2 - Inserção de Dados

Foram realizadas inserções utilizando:

- `insertOne()`
- `insertMany()`

Os documentos possuem informações como código, produto, fornecedor, descrição, imagem, valor e categoria.

### Etapa 3 - Seleções, Filtros e Consultas

Foram realizadas consultas utilizando:

- `find()` para consulta geral;
- filtros por categoria;
- filtros por fornecedor;
- projeção para ocultar o campo `_id`;
- expressões regulares (Regex) utilizando `/corporativo/i`.

## Tecnologias utilizadas

- MongoDB Atlas
- MongoDB for VS Code
- Visual Studio Code
- MongoDB / NoSQL

## Arquivos

- `playground-1-criando-db.mongodb.js` — criação do banco e collection.
- `playground-2-inserindo.mongodb.js` — inserção dos dados.
- `playground-3-selecionando-1.mongodb.js` — consultas e filtros.