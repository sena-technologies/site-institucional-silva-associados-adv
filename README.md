# Site Institucional Silva & Associados - Escritório de Advocacia

Site institucional desenvolvido em **Next.js 15** com **TypeScript** e **Tailwind CSS** para o escritório de advocacia Silva & Associados.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Firebase** - Backend para formulário de contato
- **Lucide React** - Ícones
- **ESLint** - Linting e formatação de código

## ✨ Funcionalidades

### 📄 Páginas Principais
- **Homepage** - Apresentação do escritório com destaque para áreas de atuação
- **Áreas de Atuação** - Detalhamento dos serviços jurídicos oferecidos
- **Nossa Equipe** - Apresentação dos advogados com fotos e currículos
- **Blog Jurídico** - Artigos especializados sobre direito (posts estáticos)
- **Contato** - Formulário integrado com Firebase

### 🎨 Design e UX
- Design responsivo para todos os dispositivos
- Paleta de cores profissional (azul e dourado)
- Tipografia elegante com fontes Google (Inter + Playfair Display)
- Componentes reutilizáveis
- Navegação intuitiva

### 📝 Blog
- Sistema de posts estáticos
- Categorias organizadas
- Tags para organização
- Posts em destaque
- Páginas individuais para cada artigo
- Sistema de artigos relacionados

### 📧 Formulário de Contato
- Integração com Firebase Firestore
- Validação de campos
- Feedback visual para o usuário
- Categorização por área de interesse
- Armazenamento seguro das mensagens

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### 1. Clone o repositório
\`\`\`bash
git clone https://github.com/sena-technologies/site-institucional-silva-associados-adv.git
cd site-institucional-silva-associados-adv
\`\`\`

### 2. Instale as dependências
\`\`\`bash
npm install
\`\`\`

### 3. Configure o Firebase
1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
2. Ative o Firestore Database
3. Copie as configurações do projeto
4. Renomeie \`.env.local\` e adicione suas credenciais:

\`\`\`env
NEXT_PUBLIC_FIREBASE_API_KEY=sua_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=seu_app_id
\`\`\`

### 4. Execute o projeto
\`\`\`bash
npm run dev
\`\`\`

O site estará disponível em \`http://localhost:3000\`

## 📁 Estrutura do Projeto

\`\`\`
src/
├── app/                    # App Router do Next.js 15
│   ├── areas-atuacao/     # Página de áreas de atuação
│   ├── blog/              # Blog com posts estáticos
│   │   └── [id]/          # Páginas individuais dos posts
│   ├── contato/           # Página de contato
│   ├── equipe/            # Página da equipe
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Homepage
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx         # Header com navegação
│   └── Footer.tsx         # Footer do site
├── data/                  # Dados estáticos
│   └── blog.ts            # Posts do blog
└── lib/                   # Configurações e utilitários
    └── firebase.ts        # Configuração do Firebase
\`\`\`

## 🎨 Personalização

### Cores
As cores podem ser personalizadas no arquivo \`tailwind.config.ts\`:
- **Primary**: Tons de azul para elementos principais
- **Gold**: Tons de dourado para destaques e CTAs

### Conteúdo
- **Blog Posts**: Edite \`src/data/blog.ts\` para adicionar/modificar artigos
- **Informações da Equipe**: Modifique \`src/app/equipe/page.tsx\`
- **Áreas de Atuação**: Edite \`src/app/areas-atuacao/page.tsx\`
- **Dados de Contato**: Atualize \`src/app/contato/page.tsx\`

### Fontes
O projeto usa:
- **Inter**: Para textos gerais
- **Playfair Display**: Para títulos e elementos elegantes

## 🚀 Deploy

### Vercel (Recomendado)
\`\`\`bash
npm run build
npx vercel
\`\`\`

### Outros provedores
\`\`\`bash
npm run build
\`\`\`

Faça upload da pasta \`.next\` e dos arquivos necessários.

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- 📱 Mobile (320px+)
- 📟 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Desktop Large (1280px+)

## 🔒 Segurança

- Validação de formulários no frontend e backend
- Sanitização de dados
- Configuração segura do Firebase
- Headers de segurança configurados

## 📈 Performance

- Next.js 15 com otimizações automáticas
- Imagens otimizadas
- Código dividido automaticamente
- CSS otimizado com Tailwind
- Fontes otimizadas com Google Fonts

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (\`git checkout -b feature/nova-feature\`)
3. Commit suas mudanças (\`git commit -am 'Adiciona nova feature'\`)
4. Push para a branch (\`git push origin feature/nova-feature\`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte técnico, entre em contato:
- Email: dev@senatechnologies.com.br
- GitHub Issues: [Link para issues](https://github.com/sena-technologies/site-institucional-silva-associados-adv/issues)

---

Desenvolvido com ❤️ pela [Sena Technologies](https://github.com/sena-technologies)
