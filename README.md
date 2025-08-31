# Silva & Associados - Site Institucional

## 📋 Sobre o Projeto

Site institucional desenvolvido para o escritório de advocacia Silva & Associados, localizado em Santa Catarina. O projeto apresenta uma plataforma moderna e profissional que destaca os serviços jurídicos oferecidos, a equipe de advogados e facilita o contato com potenciais clientes.

## 🚀 Tecnologias Utilizadas

- **Next.js 15.5.2** - Framework React para produção
- **TypeScript** - Tipagem estática para maior segurança do código
- **Tailwind CSS 3.4.0** - Framework CSS utilitário para estilização
- **Firebase Firestore** - Banco de dados para formulário de contato
- **Lucide React** - Biblioteca de ícones moderna
- **ESLint** - Linter para qualidade de código

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── page.tsx           # Página inicial
│   ├── equipe/            # Página da equipe
│   ├── blog/              # Blog e artigos
│   ├── areas-atuacao/     # Áreas de atuação
│   ├── contato/           # Formulário de contato
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx         # Cabeçalho do site
│   └── Footer.tsx         # Rodapé do site
├── data/                  # Dados estáticos
│   └── blog.ts           # Dados dos artigos do blog
└── lib/                   # Bibliotecas e utilitários
    └── firebase.ts        # Configuração do Firebase
```

## ✨ Funcionalidades

### 🏠 Página Inicial
- Hero section com call-to-action
- Apresentação dos serviços principais
- Seção de estatísticas do escritório
- Depoimentos de clientes
- Formulário de contato rápido

### 👥 Equipe
- Perfis detalhados dos advogados
- Fotos profissionais da equipe
- Formação acadêmica e especializações
- Experiência e conquistas profissionais
- Informações de contato direto

### 📚 Blog
- Artigos jurídicos especializados
- Sistema de categorias
- Interface de leitura otimizada
- Navegação entre posts

### ⚖️ Áreas de Atuação
- Direito Empresarial e Tributário
- Direito Trabalhista e Civil
- Direito Penal e Processual Penal
- Direito de Família e Sucessões

### 📞 Contato
- Formulário integrado com Firebase
- Validação de dados
- Informações de localização (Santa Catarina)
- Múltiplos canais de comunicação

## 🛠️ Configuração do Ambiente

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/sena-technologies/site-institucional-silva-associados-adv.git
cd site-institucional-silva-associados-adv
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente (opcional):
```bash
# Copie o arquivo de exemplo
cp .env.example .env.local

# Configure as credenciais do Firebase (se necessário)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
# ... outras configurações
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

5. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📋 Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Cria a versão de produção
npm run start        # Inicia o servidor de produção
npm run lint         # Executa o linter
npm run lint:fix     # Corrige problemas do linter automaticamente
```

## 🎨 Design e UX

### Paleta de Cores
- **Primário**: Tons de azul (#1e40af, #3b82f6)
- **Secundário**: Dourado (#d97706, #f59e0b)
- **Neutros**: Cinzas (#374151, #6b7280, #9ca3af)

### Tipografia
- **Headings**: Font família serif para elegância
- **Body**: Font família sans-serif para legibilidade

### Responsividade
- Design mobile-first
- Breakpoints otimizados para todos os dispositivos
- Imagens otimizadas com Next.js Image

## 🔧 Configurações Especiais

### Next.js
- App Router habilitado
- Otimização de imagens configurada
- Suporte a WebP e AVIF
- Configuração de qualidades de imagem personalizadas

### Firebase
- Integração opcional (funciona sem configuração)
- Fallback system para desenvolvimento
- Configuração dinâmica de imports

### Tailwind CSS
- Configuração customizada
- Cores do tema personalizadas
- Utilitários extras para o design

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório no [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras Plataformas
O projeto é compatível com qualquer plataforma que suporte Next.js:
- Netlify
- AWS Amplify
- Heroku
- DigitalOcean App Platform

## 📝 Licença

Este projeto foi desenvolvido pela [Sena Technologies](https://github.com/sena-technologies) para Silva & Associados.

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📞 Suporte

Para suporte técnico ou dúvidas sobre o projeto, entre em contato:

- **Email**: contato@senatechnologies.com
- **GitHub**: [@sena-technologies](https://github.com/sena-technologies)

---

Desenvolvido com ❤️ pela **Sena Technologies** para **Silva & Associados**
