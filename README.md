# MindCareON 🧠

MindCareON é uma plataforma moderna de telemedicina focada em consultas online seguras, eficientes e com experiência digital de alto nível. Construída com Next.js 15, React 19, Prisma ORM e Tailwind CSS, oferece videoconferência com chat em tempo real e interface responsiva inspirada em grandes players como Google Meet e Zoom.

## 🚀 Tecnologias Utilizadas

- **Frontend:** Next.js 15 (App Router) + React 19, Tailwind CSS 4, shadcn/ui, Radix UI (componentes acessíveis), Framer Motion (animações), Lucide React (ícones), Sonner (notificações elegantes)
- **Backend:** Node.js, Prisma ORM, PostgreSQL (via Docker), Socket.io (chat e presença em tempo real), WebRTC (videoconferência peer-to-peer)
- **DevOps:** Docker e Docker Compose, pnpm (gerenciador de pacotes)

## 📋 Requisitos

- Node.js (LTS recomendada)
- PNPM instalado globalmente
- Docker + Docker Compose

## ⚙️ Instalação e Configuração

1. Clone o repositório  
   `git clone https://github.com/luisotaviopilotto/DRP10-PJI610-A2025S2-T001`  
   `cd DRP10-PJI610-A2025S2-T001`

2. Instale as dependências  
   `pnpm install`

3. Configure as variáveis de ambiente  
   Crie um arquivo `.env` na raiz do projeto com:  
   `DATABASE_URL="postgresql://postgres:postgres@localhost:5432/drp10_pji610_a2025s2_t001"`

4. Suba o banco de dados  
   `docker-compose up -d`

5. Rode as migrações do Prisma  
   `pnpm prisma migrate dev`

## 🏃 Executando o Projeto

- **Modo desenvolvimento:**  
  `pnpm dev`  
  Acesse: http://localhost:3000

- **Build de produção:**  
  `pnpm build`  
  `pnpm start`

## 🌟 Funcionalidades Principais

- Videoconferência online com múltiplos participantes
- Chat em tempo real integrado na sala
- Interface moderna, responsiva e acessível
- Animações suaves
- Tema claro/escuro
- Notificações contextuais (Sonner)
- Arquitetura escalável

## 📁 Estrutura de Pastas

```
mindcareon/
├── src/
│ ├── app/
│ │ ├── (pages)/
│ │ │ └── meeting/[sessionId]/
│ ├── components/
│ │ └── ui/
│ ├── lib/
│ ├── hooks/
│ └── assets/
├── prisma/
├── docker-compose.yml
├── server.js
├── pnpm-workspace.yaml
├── tsconfig.json
└── README.md
```

## 🧐 Exemplos de Uso

1. Cadastre-se ou entre na plataforma.
2. Crie ou acesse uma sala de videoconferência.
3. Utilize o chat integrado durante a reunião.
4. Receba notificações ao entrar/sair participantes.
5. Use em desktop ou dispositivos móveis.

## 💡 Como Contribuir

1. Faça fork do repositório
2. Crie uma branch:
   `git checkout -b feature/NovaFeature`
3. Commit suas alterações:
   `git commit -m 'feat: NovaFeature'`
4. Push para o remoto:
   `git push origin feature/NovaFeature`
5. Abra um Pull Request

## 📝 Licença

Projeto sob licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🔗 Recursos

Logo disponível em `src/assets/logo.svg`
