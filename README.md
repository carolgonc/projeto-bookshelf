📚 BookShelf

BookShelf é uma aplicação web moderna para gerenciamento de biblioteca pessoal.
Permite cadastrar, organizar e acompanhar a leitura dos seus livros, com estatísticas em tempo real e uma interface elegante.

🚀 Tecnologias

Next.js 15
 (App Router)

React 19
 + TypeScript

Tailwind CSS
 + shadcn/ui

🛠️ Como começar

Clone o repositório e instale as dependências:

git clone https://github.com/seu-usuario/bookshelf.git
cd bookshelf
npm install


Execute o servidor de desenvolvimento:

npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev


Abra http://localhost:3000
 no navegador para ver a aplicação em funcionamento.

✨ Funcionalidades

Dashboard com estatísticas gerais da biblioteca

Listagem de livros com busca e filtros por gênero

Adicionar/editar livros com preview da capa e validação em tempo real

Gerenciar progresso de leitura (Quero Ler, Lendo, Lido, Pausado, Abandonado)

Excluir livros com confirmação de segurança

📖 Estrutura do Livro

Cada livro contém:
id, title, author, genre, year, pages, rating, synopsis, cover e status.

🚀 Deploy

A forma mais simples de publicar o projeto é usando a plataforma Vercel
, criadora do Next.js.

📌 Melhorias Futuras

Integração com APIs externas para buscar capas e sinopses.

Modo escuro (dark mode).

Exportar biblioteca em PDF ou Excel.