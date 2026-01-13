# 🎮 Loja Joga&Joga

API RESTful desenvolvida para simular o backend de uma loja de jogos digitais. O projeto permite o gerenciamento de **categorias** e **produtos**, aplicando conceitos de CRUD, relacionamento entre entidades e boas práticas de arquitetura backend.

Este projeto foi desenvolvido com fins educacionais, como parte dos estudos em **Node.js, TypeScript e NestJS**.

---

## 🚀 Tecnologias Utilizadas

* **Node.js**
* **TypeScript**
* **NestJS**
* **TypeORM**
* **MySQL**
* **Insomnia** (testes das rotas)

---

## 🧱 Arquitetura do Projeto

O projeto segue o padrão de arquitetura utilizado pelo NestJS, separando responsabilidades em:

* **Controller** → Recebe as requisições HTTP
* **Service** → Contém as regras de negócio
* **Entity** → Representa as tabelas do banco de dados
* **Module** → Organiza e integra os recursos da aplicação

---

## 📦 Entidades do Sistema

### 🗂️ Categoria

Representa os gêneros de jogos disponíveis na loja.

Exemplos de categorias cadastradas:

* RPG
* Esporte
* Corrida
* Ação e Aventura
* Terror
* Educativo

### 🎮 Produto

Representa os jogos vendidos na loja, sempre vinculados a uma categoria.

Exemplos de produtos:

* GTA VI
* God of War
* EA Sports FC 24
* The Witcher 3

---

## 🔗 Relacionamentos

* Uma **Categoria** pode ter **vários Produtos**
* Um **Produto** pertence a **uma Categoria**

Relacionamento implementado com **@OneToMany** e **@ManyToOne** no TypeORM.

---

## 🧪 Testes com Insomnia

A API pode ser testada utilizando o Insomnia ou outra ferramenta de requisições HTTP.

### 📌 Rotas de Categoria

* **GET** `/categorias` → Listar todas as categorias
* **GET** `/categorias/{id}` → Buscar categoria por ID
* **GET** `/categorias/descricao/{descricao}` → Buscar por descrição
* **POST** `/categorias` → Criar categoria
* **PUT** `/categorias` → Atualizar categoria
* **DELETE** `/categorias/{id}` → Remover categoria

### 📌 Rotas de Produto

* **GET** `/produtos` → Listar todos os produtos
* **GET** `/produtos/{id}` → Buscar produto por ID
* **POST** `/produtos` → Criar produto
* **PUT** `/produtos` → Atualizar produto
* **DELETE** `/produtos/{id}` → Remover produto

---

## 📄 Exemplo de Requisição (Produto)

```json
{
  "nome": "GTA VI",
  "descricao": "Jogo de ação e aventura com mundo aberto e narrativa extensa.",
  "preco": 799.90,
  "categoria": {
    "id": 5
  }
}
```

---

## ⚙️ Como Executar o Projeto

1. Clone este repositório
2. Instale as dependências:

   ```bash
   npm install
   ```
3. Configure o banco de dados MySQL
4. Execute o projeto:

   ```bash
   npm run start:dev
   ```
5. Acesse a API em:

   ```
   http://localhost:4000
   ```

---

## 🎯 Objetivo do Projeto

Este projeto tem como objetivo consolidar conhecimentos em:

* Desenvolvimento de APIs REST
* NestJS e TypeORM
* Relacionamento entre entidades
* Boas práticas de backend

---

## 👩‍💻 Autora
**Tayene Ramires**  
Estudante de Sistemas de Informação | Full Stack em formação  
JavaScript • TypeScript • Node.js • NestJS • HTML • CSS • SQL
