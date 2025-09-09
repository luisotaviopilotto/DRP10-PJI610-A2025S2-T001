# MindCareON 🧠

Uma plataforma moderna de telemedicina desenvolvida com Next.js 15, React 19, TailwindCSS e Prisma, focada em proporcionar consultas online eficientes e seguras.

## 🚀 Tecnologias

- **Frontend**:
  - Next.js 15.5.2 (com Turbopack)
  - React 19.1.0
  - TailwindCSS 4
  - Framer Motion
  - Radix UI (componentes acessíveis)
  - Lucide React (ícones)
  - Sonner (notificações)

- **Backend**:
  - Prisma ORM
  - PostgreSQL
  - Docker

## 📋 Pré-requisitos

- Node.js (versão LTS recomendada)
- PNPM
- Docker e Docker Compose
- PostgreSQL (via Docker)

## 🛠️ Configuração do Ambiente

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd mindcareon
```

2. Instale as dependências:
```bash
pnpm install
```

3. Configure as variáveis de ambiente:
- Crie um arquivo `.env` na raiz do projeto
- Adicione a URL do banco de dados:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/drp10_pji610_a2025s2_t001"
```

4. Inicie o banco de dados:
```bash
docker-compose up -d
```

5. Execute as migrações do Prisma:
```bash
pnpm prisma migrate dev
```

## 🚀 Executando o Projeto

1. Ambiente de desenvolvimento:
```bash
pnpm dev
```
- Acesse: http://localhost:3000

2. Build de produção:
```bash
pnpm build
pnpm start
```

## 🌟 Funcionalidades

- ✅ Sala de videoconferência com chat em tempo real
- ✅ Interface moderna e responsiva
- ✅ Componentes acessíveis com Radix UI
- ✅ Animações suaves com Framer Motion
- ✅ Tema claro/escuro
- ✅ Notificações elegantes com Sonner

## 🔧 Estrutura do Projeto

```
mindcareon/
├── src/
│   ├── app/           # Rotas e páginas
│   ├── components/    # Componentes reutilizáveis
│   ├── lib/          # Utilitários e configurações
│   └── assets/       # Recursos estáticos
├── prisma/           # Schema e migrações
└── docker-compose.yml # Configuração do Docker
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Contribuição

1. Faça o fork do projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

Desenvolvido com 💙 pela equipe MindCareON
