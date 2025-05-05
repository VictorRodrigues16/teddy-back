# 🧠 API - Sistema de Gerenciamento de Clientes (Back-End)

Este é o back-end do sistema de gerenciamento de clientes desenvolvido com **NestJS** e **TypeORM**, utilizando banco de dados **PostgreSQL**. Ele oferece endpoints RESTful para cadastro, edição, desativação, seleção e listagem de clientes com filtros e paginação.

---

## 📋 Funcionalidades da API

- ✅ Criar cliente  
- ✏️ Editar cliente  
- ❌ Desativar (soft delete) cliente  
- 🔍 Buscar clientes com filtros e paginação  
- 📌 Selecionar um ou mais clientes  
- 🚫 Desselecionar todos os clientes  

---

## 📁 Estrutura do Projeto

```bash
src/
├── clients/
│   ├── dto/
│   ├── entities/
│   ├── clients.controller.ts
│   ├── clients.service.ts
│   ├── clients.module.ts
├── config/
│   ├── data-source.ts
│   └── migrations/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts
```

## 🧪 Endpoints disponíveis

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/clients` | Criar novo cliente |
| `PUT` | `/clients/:id` | Editar cliente existente |
| `DELETE` | `/clients/:id` | Desativar cliente |
| `GET` | `/clients?page=1&limit=10&selected=true` | Listar clientes com filtros e paginação |
| `POST` | `/clients/select` | Desselecionar múltiplos clientes |

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
PRODUCTION=false

DB_HOST=localhost
DB_PORT=5432
DB_NAME=teddy
DB_USER=postgres
DB_PASSWORD=123
```

## 🚀 Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/VictorRodrigues16/teddy-back.git
cd teddy-back
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente
Crie o arquivo .env conforme descrito acima.

### 4. Rode as Migrations
```bash
npm run migration:run
```

### 5. Inicie o servidor
```bash
npm run start:dev
```
## 🙋‍♂️ Autor

Este projeto foi desenvolvido individualmente por Victor.
