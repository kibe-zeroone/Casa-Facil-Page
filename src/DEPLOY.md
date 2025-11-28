# 📦 Guia de Deploy - CasaFácil

Este documento contém instruções detalhadas para fazer o deploy da plataforma CasaFácil.

## 🚀 Opções de Deploy

### 1. Vercel (Recomendado)

O Vercel é a opção mais simples e oferece deploy automático via GitHub.

#### Passo a passo:

1. Faça login em [vercel.com](https://vercel.com)
2. Conecte sua conta do GitHub
3. Importe o repositório casafacil
4. Configure as variáveis de ambiente (se necessário)
5. Click em "Deploy"

O Vercel detectará automaticamente que é um projeto Vite e configurará tudo automaticamente.

**Comandos de Build:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

---

### 2. Netlify

Outra excelente opção para deploy de sites React.

#### Passo a passo:

1. Faça login em [netlify.com](https://netlify.com)
2. Click em "New site from Git"
3. Conecte seu repositório do GitHub
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click em "Deploy site"

---

### 3. GitHub Pages

Deploy gratuito diretamente do GitHub.

#### Passo a passo:

1. Instale o pacote gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Adicione ao `package.json`:
```json
{
  "homepage": "https://seu-usuario.github.io/casafacil",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Atualize `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/casafacil/',
  // ... resto da config
})
```

4. Execute:
```bash
npm run deploy
```

---

### 4. Docker

Para deploy em servidores próprios ou cloud providers.

#### Crie um `Dockerfile`:

```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Comandos Docker:

```bash
# Build da imagem
docker build -t casafacil .

# Run container
docker run -p 80:80 casafacil
```

---

## 🔧 Configurações Importantes

### Variáveis de Ambiente

Se você adicionar funcionalidades que precisam de APIs externas, crie um arquivo `.env`:

```env
VITE_API_URL=https://sua-api.com
VITE_MAPS_API_KEY=sua-chave-aqui
```

**Importante**: Nunca commite o arquivo `.env` no Git!

### Build de Produção

Para criar uma build de produção localmente:

```bash
npm run build
```

A build será criada na pasta `dist/`

### Preview da Build

Para testar a build localmente antes do deploy:

```bash
npm run preview
```

---

## 📊 Performance e Otimização

### Antes do Deploy, verifique:

1. **Imagens**: 
   - Certifique-se que todas as imagens estão otimizadas
   - Use formatos modernos (WebP, AVIF)
   - Implemente lazy loading

2. **Code Splitting**:
   - O Vite já faz isso automaticamente
   - Verifique se as chunks estão sendo geradas corretamente

3. **Cache**:
   - Configure headers de cache apropriados
   - Use service workers se necessário

4. **Analytics**:
   - Adicione Google Analytics ou similar
   - Configure monitoramento de erros (Sentry)

---

## 🔒 Segurança

### Checklist de Segurança:

- [ ] Remova console.logs sensíveis
- [ ] Configure CORS apropriadamente
- [ ] Use HTTPS em produção
- [ ] Implemente rate limiting se houver APIs
- [ ] Configure Content Security Policy (CSP)
- [ ] Valide todos os inputs do usuário

---

## 📝 CI/CD com GitHub Actions

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID}}
        vercel-project-id: ${{ secrets.PROJECT_ID}}
        vercel-args: '--prod'
```

---

## 🌐 Domínio Personalizado

### Configurando um domínio próprio:

1. **Compre um domínio** (GoDaddy, Namecheap, Registro.br, etc.)

2. **Configure DNS**:
   - Para Vercel: Adicione um CNAME apontando para `cname.vercel-dns.com`
   - Para Netlify: Adicione um CNAME apontando para seu site netlify

3. **Configure no Dashboard**:
   - Vercel: Settings → Domains
   - Netlify: Domain settings → Add custom domain

4. **SSL/TLS**:
   - Será configurado automaticamente pela plataforma

---

## 📞 Suporte e Troubleshooting

### Problemas Comuns:

**1. Build falha**
```bash
# Limpe cache e reinstale dependências
rm -rf node_modules package-lock.json
npm install
npm run build
```

**2. Rotas 404 após deploy**
- Configure redirecionamentos para SPA
- Vercel: Crie `vercel.json`
- Netlify: Crie `_redirects`

**3. Assets não carregam**
- Verifique o `base` path no `vite.config.ts`
- Certifique-se que os caminhos são relativos

---

## 📱 Testando em Produção

Após o deploy, teste:

- [ ] Todas as páginas carregam corretamente
- [ ] Navegação funciona em todos os links
- [ ] Formulários enviam dados corretamente
- [ ] Imagens carregam
- [ ] Site funciona em mobile
- [ ] Performance está adequada (use Lighthouse)
- [ ] SEO está configurado

---

## 🎉 Deploy Concluído!

Seu site está no ar! Compartilhe com o mundo:

- 🌐 URL do site
- 📱 QR Code para acesso mobile
- 📧 Newsletter para usuários
- 📱 Redes sociais

---

**Última atualização**: Novembro 2024
**Versão**: 1.0.0
