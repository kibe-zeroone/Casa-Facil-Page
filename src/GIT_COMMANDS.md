# 🚀 Comandos Git para Deploy - CasaFácil

Este guia contém todos os comandos Git necessários para enviar seu projeto para o GitHub.

## 📋 Pré-requisitos

1. Ter o Git instalado ([Download](https://git-scm.com/))
2. Ter uma conta no GitHub ([Criar conta](https://github.com/))
3. Ter o projeto CasaFácil no seu computador

---

## 🎯 Passo a Passo Completo

### 1️⃣ Configurar Git (Primeira Vez)

Se é a primeira vez usando Git, configure seu nome e e-mail:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

### 2️⃣ Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Click no botão **"New"** (ou **"+"** → **"New repository"**)
3. Nome do repositório: `casafacil`
4. Descrição: "Plataforma moderna para busca e venda de imóveis"
5. Escolha **Public** ou **Private**
6. **NÃO** marque "Initialize with README" (já temos um)
7. Click em **"Create repository"**

### 3️⃣ Inicializar Git no Projeto

Abra o terminal na pasta do projeto e execute:

```bash
# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit: CasaFácil v2.0.0 - Site completo com melhorias visuais"
```

### 4️⃣ Conectar com GitHub

Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub:

```bash
# Adicionar repositório remoto
git remote add origin https://github.com/SEU-USUARIO/casafacil.git

# Verificar se foi adicionado corretamente
git remote -v
```

### 5️⃣ Enviar para GitHub

```bash
# Renomear branch para main (se necessário)
git branch -M main

# Enviar código para GitHub
git push -u origin main
```

---

## 🔄 Comandos para Atualizações Futuras

Quando você fizer mudanças no projeto:

```bash
# Ver status das mudanças
git status

# Adicionar mudanças específicas
git add arquivo1.tsx arquivo2.tsx

# OU adicionar todas as mudanças
git add .

# Fazer commit com mensagem descritiva
git commit -m "Descrição das mudanças"

# Enviar para GitHub
git push
```

---

## 📝 Boas Práticas para Commits

### Mensagens Descritivas

✅ **BOM**:
```bash
git commit -m "feat: Adiciona página de contato"
git commit -m "fix: Corrige erro no formulário de checkout"
git commit -m "style: Melhora cores da navegação"
git commit -m "docs: Atualiza README com instruções de deploy"
```

❌ **EVITE**:
```bash
git commit -m "mudanças"
git commit -m "fix"
git commit -m "atualização"
```

### Prefixos Comuns

- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `style:` - Mudanças visuais (CSS, layout)
- `refactor:` - Refatoração de código
- `docs:` - Documentação
- `test:` - Testes
- `chore:` - Tarefas de manutenção

---

## 🌿 Trabalhando com Branches

### Criar e Trabalhar em uma Nova Feature

```bash
# Criar nova branch
git checkout -b feature/nova-funcionalidade

# Fazer mudanças e commits
git add .
git commit -m "feat: Adiciona nova funcionalidade"

# Enviar branch para GitHub
git push -u origin feature/nova-funcionalidade

# Voltar para branch main
git checkout main

# Merge da feature na main
git merge feature/nova-funcionalidade

# Enviar main atualizada
git push
```

---

## 🔍 Comandos Úteis

### Verificar Histórico

```bash
# Ver histórico de commits
git log

# Ver histórico resumido
git log --oneline

# Ver últimos 5 commits
git log -5
```

### Desfazer Mudanças

```bash
# Desfazer mudanças não commitadas
git checkout -- arquivo.tsx

# Desfazer último commit (mantém mudanças)
git reset --soft HEAD~1

# Desfazer último commit (apaga mudanças)
git reset --hard HEAD~1
```

### Sincronizar com GitHub

```bash
# Baixar atualizações do GitHub
git pull

# Baixar sem fazer merge
git fetch
```

---

## 📦 Arquivo .gitignore

Crie um arquivo `.gitignore` na raiz do projeto para ignorar arquivos:

```gitignore
# Dependências
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build
dist/
build/
.next/

# Ambiente
.env
.env.local
.env.production

# IDE
.vscode/
.idea/
*.swp
*.swo

# Sistema
.DS_Store
Thumbs.db

# Logs
logs/
*.log

# Cache
.cache/
.temp/
```

---

## 🔐 Autenticação GitHub

### Usando Token de Acesso Pessoal

Se você tem 2FA ativado ou prefere usar token:

1. Acesse: GitHub → Settings → Developer settings → Personal access tokens
2. Click em "Generate new token"
3. Marque: `repo`, `workflow`
4. Copie o token
5. Use o token como senha ao fazer push

### Usando SSH (Recomendado)

```bash
# Gerar chave SSH
ssh-keygen -t ed25519 -C "seu.email@exemplo.com"

# Copiar chave pública
cat ~/.ssh/id_ed25519.pub

# Adicionar no GitHub:
# Settings → SSH and GPG keys → New SSH key

# Mudar URL do repositório para SSH
git remote set-url origin git@github.com:SEU-USUARIO/casafacil.git
```

---

## 🚨 Resolvendo Problemas Comuns

### Erro: "fatal: remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/SEU-USUARIO/casafacil.git
```

### Erro: "failed to push some refs"

```bash
# Baixar mudanças do GitHub primeiro
git pull origin main --rebase

# Depois fazer push
git push
```

### Erro: "Permission denied"

```bash
# Verificar URL do repositório
git remote -v

# Reconfigurar se necessário
git remote set-url origin https://github.com/SEU-USUARIO/casafacil.git
```

---

## 📊 Exemplo Completo de Workflow

```bash
# 1. Clonar projeto (se for começar do zero)
git clone https://github.com/SEU-USUARIO/casafacil.git
cd casafacil

# 2. Criar nova branch para feature
git checkout -b feature/minha-feature

# 3. Fazer mudanças no código
# ... editar arquivos ...

# 4. Ver o que mudou
git status
git diff

# 5. Adicionar mudanças
git add .

# 6. Commitar
git commit -m "feat: Adiciona minha nova feature"

# 7. Enviar para GitHub
git push -u origin feature/minha-feature

# 8. Criar Pull Request no GitHub
# Ir para o repositório no GitHub e criar PR

# 9. Após aprovação, fazer merge
git checkout main
git pull
git merge feature/minha-feature
git push

# 10. Deletar branch (opcional)
git branch -d feature/minha-feature
git push origin --delete feature/minha-feature
```

---

## 📚 Recursos Adicionais

### Documentação Oficial
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

### Ferramentas Visuais
- [GitHub Desktop](https://desktop.github.com/)
- [GitKraken](https://www.gitkraken.com/)
- [SourceTree](https://www.sourcetreeapp.com/)

### Aprenda Mais
- [Learn Git Branching](https://learngitbranching.js.org/)
- [Git Immersion](http://gitimmersion.com/)
- [Oh My Git!](https://ohmygit.org/) - Jogo para aprender Git

---

## 🎉 Pronto!

Seu projeto agora está no GitHub! 🚀

URL do repositório: `https://github.com/SEU-USUARIO/casafacil`

### Próximos Passos:

1. ✅ Configure GitHub Pages ou Vercel para deploy
2. ✅ Adicione badges no README (build status, license, etc.)
3. ✅ Convide colaboradores (se houver)
4. ✅ Configure GitHub Actions para CI/CD
5. ✅ Ative Issues e Projects para gerenciamento

---

**Boa sorte com seu projeto! 🏠✨**
