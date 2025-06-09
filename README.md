# SDK Antifraude – NexShop

Este projeto é um SDK antifraude modular e reutilizável para e-commerce, com foco em análise de risco baseada no comportamento do usuário.

## 🔍 Objetivo

Detectar atividades suspeitas em momentos críticos como login e checkout, utilizando coleta passiva de dados e regras de análise no back-end.

## ⚙️ Arquitetura

### 🧠 Backend (Node.js + Express)

- Endpoint REST: `/identity/verify`
- Avalia dados do front-end e retorna score + status (`allow`, `review`, `deny`)
- Regras configuráveis no arquivo `riskEngine.js`

### 🌐 Frontend (JavaScript puro)

- Coleta:
  - Device fingerprint (userAgent)
  - Movimentação do mouse
  - Metadados da sessão (simulado)
- Envia para o back-end após 5 segundos

## 🚀 Como Rodar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/sdk-antifraude.git
cd sdk-antifraude
```

### 2. Configure o backend

```bash
cd backend
npm install
node index.js
```

Servidor iniciado em: `http://localhost:3000`

### 3. Abra o front-end

- Vá até a pasta `frontend`
- Abra o arquivo `index.html` no navegador
- O SDK será executado automaticamente

## 📦 Tecnologias Usadas

| Camada      | Ferramenta            |
|-------------|------------------------|
| Frontend    | JavaScript puro        |
| Backend     | Node.js + Express      |
| Análise     | Regras simples (JS)    |
| Teste local | Navegador + console    |

## 📌 Exemplo de Resposta da API

```json
{
  "score": 40,
  "status": "review",
  "timestamp": "2025-06-06T21:00:00.000Z"
}
```

## 🔧 Melhorias Futuras

- Captura real de IP (via API externa)
- Armazenamento de sessões em MongoDB
- Detecção de padrões com machine learning
- Interface web para acompanhamento dos riscos