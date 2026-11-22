# 🔗 LinkFlow — Encurtador de URLs

O **LinkFlow** é uma aplicação web full-stack para encurtamento de URLs, criação de apelidos personalizados e monitoramento de cliques em tempo real.

## 🚀 Funcionalidades

- **Encurtamento inteligente:** Gera códigos curtos aleatórios automaticamente.
- **Apelidos personalizados:** Permite definir um caminho customizado (ex: `/youtube`) com validação de duplicidade.
- **Contador de cliques:** Atualiza e exibe a quantidade de acessos de cada link em tempo real.
- **Gerenciamento rápido:** Cópia da URL curta com um clique e exclusão de registros diretamente na interface.

## 🛠️ Tecnologias Utilizadas

- **Backend:** Node.js, TypeScript, Express
- **Banco de Dados & ORM:** PostgreSQL (hospedado no Supabase), Prisma ORM
- **Frontend:** HTML5, CSS3, JavaScript (Fetch API)

## ⚙️ Como rodar o projeto localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com
   cd linkflow
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto com as credenciais do seu banco PostgreSQL:
   ```env
   DATABASE_URL="sua-url-de-conexao-postgresql"
   DIRECT_URL="sua-url-direta-postgresql"
   ```

4. **Sincronize o banco de dados com o Prisma:**
   ```bash
   npx prisma db push
   ```

5. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse `http://localhost:3000` no navegador.
