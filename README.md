# Amor em Patas - Site de Adoção de Animais

**Sistema completo de adoção de animais com frontend React/TypeScript/TailwindCSS, backend Node.js/Express e banco MariaDB/MySQL.**

[![Backend Status](https://img.shields.io/badge/backend-Node.js%20%7C%20Express-greenhttps://github.com/gilmroliveira/amor-em-phttps://img.shields.io/badge/frontend-Reacthttps://github.com/gilmroliveira/amor-em-phttps://img.shields.io/badge/database-Mariahttps://github.com/gilmroliveira/amor-em-pão Geral

Sistema completo para adoção de animais que integra:
- **Frontend**: React + TypeScript + TailwindCSS (clonado e adaptado de `fabricio-tech/site-de-peludos`)
- **Backend**: API RESTful em Node.js + Express (criado do zero seguindo padrão MVC)
- **Banco**: MariaDB/MySQL com 4 tabelas relacionais (baseado no modelo SQL fornecido)

 🏗️ Como Foi Criado

| **Parte** | **Origem** | **Modificações** |
|-----------|------------|------------------|
| **Frontend** | `git clone https://github.com/fabricio-tech/site-de-peludos.git` | Mantido original + integração API backend |
| **Backend** | Criado manualmente | Padrão MVC (Models, Views, Controllers) dos projetos anteriores |
| **Banco** | Script `sql_amor_em_patas.sql` fornecido | Adaptado para MariaDB/MySQL + dados de exemplo |

 📊 Scripts Criados

 1. Banco de Dados (`database/sql_amor_em_patas.sql`)
**Propósito**: Criar estrutura completa com 4 tabelas relacionais + dados de teste

```sql
-- 4 Tabelas com relacionamentos FK
CREATE TABLE animais    -- Animais para adoção
CREATE TABLE adotantes  -- Usuários interessados
CREATE TABLE adocoes    -- Registros de adoção (FK animais + adotantes)
CREATE TABLE administradores -- Admins do sistema
```

**Dados de exemplo inseridos**:
- 3 animais (Luna, Thor, Mel)
- 2 adotantes (Maria, Carlos)
- 1 adoção de teste

 2. Backend Node.js (`backend/src/`)
 **Configuração** (`config/db.js`)
```js
// Conecta Node → MariaDB usando variáveis .env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
```

 **Models** (camada de dados)
| Arquivo | Função |
|---------|--------|
| `animalModel.js` | CRUD animais (`listarTodos`, `criar`, `atualizarStatus`, `remover`) |
| `adotanteModel.js` | CRUD adotantes (`listarTodos`, `criar`) |
| `adocaoModel.js` | Listar adoções com JOIN (animal + adotante) |

 **Controllers** (lógica de negócio)
| Arquivo | Endpoints |
|---------|-----------|
| `animaisController.js` | `GET/POST /api/animais` |
| `adotantesController.js` | `GET/POST /api/adotantes` |
| `adocoesController.js` | `GET/POST /api/adocoes` |

 **Rotas** (`routes/*.js`)
```js
// Exemplo: animaisRoutes.js
router.get('/', animaisController.listar);  // GET /api/animais
router.post('/', animaisController.criar);  // POST /api/animais
```

 **Servidor** (`server.js`)
```js
app.use(cors());                    // Permite frontend acessar API
app.use(bodyParser.json());        // Lê JSON das requisições
app.use('/api/animais', animaisRoutes);
```

 3. Configuração `.env` (`backend/.env`)
**Propósito**: Separar credenciais do banco do código

```env
DB_HOST=localhost        # Servidor MariaDB
DB_USER=root             # Usuário do banco
DB_PASSWORD=senha123     # Senha do banco
DB_NAME=amor_em_patas    # Nome do banco
PORT=3001                # Porta da API
```

 🛠️ Comandos Exatos Utilizados

 1. Clonar Frontend
```powershell
cd C:\projetos
git clone https://github.com/fabricio-tech/site-de-peludos.git amor-em-patas
cd amor-em-patas
```

 2. Criar Backend
```powershell
mkdir backend
cd backend
npm init -y
npm install express mysql2 cors dotenv body-parser
npm install --save-dev nodemon
mkdir src\config src\models src\controllers src\routes
```

 3. Ajustar package.json (backend)
```json
"scripts": {
  "start": "node src/server.js",
  "dev": "nodemon src/server.js"
}
```

 4. Criar Banco
```sql
-- Executado no MariaDB Workbench ou mysql -u root -p
SOURCE database/sql_amor_em_patas.sql;
```

 🚀 Guia de Instalação (Professor)

 Pré-requisitos
```
☑ Node.js LTS
☑ MariaDB/MySQL rodando
☑ Git
```

 1. Clonar e Instalar
```powershell
cd C:\projetos
git clone https://github.com/gilmroliveira/amor-em-patas.git
cd amor-em-patas
```

 2. Banco de Dados
```sql
-- MariaDB Workbench ou terminal
USE amor_em_patas;
SHOW TABLES;           -- Deve mostrar 4 tabelas
SELECT * FROM animais; -- Deve mostrar 3 animais de exemplo
```

 3. Backend
```powershell
cd backend
npm install
# Criar .env com suas credenciais MariaDB
npm run dev
```
**Verificar**: `http://localhost:3001/api/animais` → JSON com 3 animais

 4. Frontend
```powershell
cd frontend  # ou pasta do React original
npm install
npm run dev
```

## 📡 Endpoints da API (Postman)

| **Endpoint** | **Método** | **Função** | **Exemplo Body** |
|--------------|------------|------------|------------------|
| `/api/animais` | `GET` | Listar animais | - |
| `/api/animais` | `POST` | Cadastrar animal | `{"nome":"Rex","especie":"Cachorro"}` |
| `/api/adotantes` | `GET` | Listar adotantes | - |
| `/api/adocoes` | `GET` | Listar adoções | - |

 🎯 Funcionalidades Entregues

| ✅ **Implementado** | **Descrição** |
|-------------------|---------------|
| **Banco completo** | 4 tabelas + relacionamentos FK + dados teste |
| **API REST** | 6 endpoints funcionais |
| **MVC Backend** | Models/Controllers/Routes organizados |
| **Config .env** | Credenciais seguras |
| **CORS habilitado** | Frontend → Backend |
| **README técnico** | Guia completo para professor |

## 📁 Estrutura Final do Projeto

```
amor-em-patas/
├── backend/                 [NOVO - Criado do zero]
│   ├── src/                 [MVC completo]
│   │   ├── config/db.js     [Conexão banco]
│   │   ├── models/          [3 models SQL]
│   │   ├── controllers/     [3 controllers]
│   │   ├── routes/          [3 routers]
│   │   └── server.js
│   ├── package.json         [Dependências npm]
│   └── .env.example         [Modelo configuração]
├── frontend/                [ORIGINAL - fabricio-tech]
├── database/
│   └── sql_amor_em_patas.sql [Script banco - ADAPTADO]
├── README.md                [ESTE ARQUIVO]
└── .gitignore               [Ignora node_modules]
```

 📞 Troubleshooting (Professor)

| **Erro** | **Solução** |
|----------|-------------|
| `Access denied` | Verificar `.env` (senha root) |
| `Unknown database` | Rodar `sql_amor_em_patas.sql` |
| `CORS error` | Backend precisa `npm run dev` |
| `404 API` | Porta 3001 (`http://localhost:3001`) |


<div align="center">
  Gilmar Oliveira - Desenvolvedor Fullstack<br>
  Base: `fabricio-tech/site-de-peludos` + Backend original
</div>
🐾 Demo Frontend Simples (demo-frontend)
Além do frontend principal em React, o projeto possui uma pasta demo-frontend/ criada especialmente para demonstração didática do backend (CRUD de animais) de forma simples e direta, sem precisar entender toda a estrutura do React.

Objetivo da demo
Mostrar claramente:

Criação de animais (INSERT no banco).

Listagem de animais (SELECT).

Exclusão de animais (DELETE).

Usar a mesma API do backend (Node + Express + MariaDB) que foi desenvolvida no projeto.

Facilitar a apresentação para o professor, com uma interface mínima e funcional em HTML + JavaScript puro.

Localização
text
amor-em-patas/
  demo-frontend/
    index.html   ⟵ interface simples de teste do backend
Como usar a demo
Iniciar o backend:

bash
cd backend
npm run dev
# API em: http://localhost:3001
Abrir a interface de demonstração:

Opção 1 (Explorador de Arquivos):

Vá até amor-em-patas/demo-frontend

Dê duplo clique em index.html

Opção 2 (VS Code + Live Server):

Abra a pasta demo-frontend no VS Code

Clique com o botão direito em index.html → “Open with Live Server”

Recursos da tela de demo

Na página demo-frontend/index.html é possível:

Cadastrar novo animal:

Preencher nome, espécie, idade, sexo e descrição.

Ao clicar em “Cadastrar”, a página envia um POST para:

POST http://localhost:3001/api/animais

O novo animal aparece imediatamente na lista.

Listar animais cadastrados:

Ao carregar a página, é feito um GET para:

GET http://localhost:3001/api/animais

Cada animal é exibido em um “card” simples com imagem ilustrativa, nome, espécie, idade, descrição e status.

Excluir animal:

Cada card possui um botão “Excluir”.

Ao clicar, é enviado um:

DELETE http://localhost:3001/api/animais/{id}

O card é removido da tela e o registro é deletado do banco.

Como usar na apresentação
Na apresentação para o professor, a sequência sugerida é:

Mostrar o banco MariaDB com as tabelas (animais, adotantes, adocoes, etc.).

Abrir o backend rodando (terminal com npm run dev).

Abrir a página demo-frontend/index.html.

Demonstrar:

Cadastro de um novo animal (formulário → aparece na lista → SELECT * FROM animais no banco).

Exclusão de um animal (botão “Excluir” → some da lista → some da tabela no banco).

Explicar que:

A demo é uma interface simplificada para visualizar o funcionamento da API.

O frontend principal do projeto continua sendo o app React na raiz do repositório.