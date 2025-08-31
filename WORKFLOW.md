# Workflow Git - Silva & Associados

## 🌿 Estrutura de Branches

### Branch Principal
- **`main`** - Branch de produção (código estável e testado)

### Branches de Desenvolvimento
- **`develop`** - Branch de desenvolvimento (integração de features)
- **`feature/[nome-da-funcionalidade]`** - Branches para novas funcionalidades
- **`bugfix/[nome-do-bug]`** - Branches para correção de bugs
- **`hotfix/[nome-do-hotfix]`** - Branches para correções urgentes em produção

## 📝 Padrão de Commits (em PT-BR)

### Formato
```
tipo(escopo): descrição breve

Descrição detalhada (opcional)
```

### Tipos de Commit
- **feat**: Nova funcionalidade
- **fix**: Correção de bug
- **docs**: Documentação
- **style**: Formatação, espaços em branco, etc.
- **refactor**: Refatoração de código
- **test**: Adição ou correção de testes
- **chore**: Tarefas de manutenção

### Exemplos de Commits
```bash
feat(header): adiciona menu de navegação responsivo
fix(formulario): corrige validação de email no contato
docs(readme): atualiza instruções de instalação
style(botoes): padroniza cores dos call-to-actions
refactor(blog): reorganiza estrutura de dados dos posts
test(contato): adiciona testes para formulário
chore(deps): atualiza dependências do projeto
```

## 🔄 Fluxo de Trabalho

### 1. Iniciar Nova Funcionalidade
```bash
git checkout develop
git pull origin develop
git checkout -b feature/nova-funcionalidade
```

### 2. Trabalhar na Feature
```bash
# Fazer alterações
git add .
git commit -m "feat(area): adiciona nova funcionalidade"
git push origin feature/nova-funcionalidade
```

### 3. Finalizar Feature
```bash
# Criar Pull Request para develop
# Após aprovação, merge para develop
git checkout develop
git pull origin develop
git branch -d feature/nova-funcionalidade
```

### 4. Deploy para Produção
```bash
git checkout main
git merge develop
git push origin main
git tag -a v1.0.0 -m "Versão 1.0.0 - Release inicial"
git push origin v1.0.0
```

## 🏗️ Fases do Projeto

### Fase 1: Estrutura Base ✅
- **Branch**: `feature/estrutura-inicial`
- Configuração inicial do Next.js
- Componentes básicos (Header, Footer)
- Layout responsivo
- Configuração do Tailwind

### Fase 2: Páginas Principais ✅
- **Branch**: `feature/paginas-principais`
- Homepage com hero section
- Página de áreas de atuação
- Página da equipe
- Navegação entre páginas

### Fase 3: Sistema de Blog 🔄
- **Branch**: `feature/blog-sistema`
- Estrutura de dados para posts
- Página de listagem do blog
- Páginas individuais dos artigos
- Sistema de categorias e tags

### Fase 4: Formulário de Contato 🔄
- **Branch**: `feature/formulario-contato`
- Integração com Firebase
- Validação de formulário
- Página de contato completa
- Tratamento de erros

### Fase 5: Otimizações e Deploy 📋
- **Branch**: `feature/otimizacoes`
- SEO e meta tags
- Performance optimizations
- Testes finais
- Configuração de deploy

## 📋 Checklist de Qualidade

### Antes de cada Commit
- [ ] Código está funcionando
- [ ] Não há erros no console
- [ ] Responsividade testada
- [ ] Commit message em português
- [ ] Código formatado

### Antes de cada Pull Request
- [ ] Todos os testes passando
- [ ] Sem conflitos com branch de destino
- [ ] Código revisado
- [ ] Documentação atualizada se necessário

## 🎯 Próximos Passos

1. **Criar branch de desenvolvimento**
2. **Organizar código atual em commits semânticos**
3. **Implementar melhorias incrementais**
4. **Preparar para deploy**

## 📞 Comandos Úteis

```bash
# Verificar status
git status

# Criar nova branch
git checkout -b feature/nome-da-feature

# Adicionar arquivos
git add .

# Commit com mensagem
git commit -m "feat(componente): descrição da alteração"

# Push para remote
git push origin nome-da-branch

# Sincronizar com remote
git pull origin develop

# Listar branches
git branch -a

# Deletar branch local
git branch -d nome-da-branch
```
