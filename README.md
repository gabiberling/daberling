# daBerling — Landing Page

Site institucional da daBerling arquitetura e interiores.
Desenvolvido em **React + Vite**, responsivo para desktop, tablet e mobile.

---

## Estrutura de pastas

```
daberling/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx          ← ponto de entrada
    ├── App.jsx           ← página completa
    ├── App.css           ← todos os estilos + responsivo
    └── assets/
        ├── logo_grande.png   ← logo completa (seção Sobre)
        ├── logo_pequena.png  ← logo compacta (nav)
        ├── imagem_hero.png   ← 🔲 ADICIONAR: imagem decorativa hero
        └── imagem_contato.png ← 🔲 ADICIONAR: ícone/ilustração contato
```

---

## Passo a passo no VS Code

### 1 — Pré-requisitos
- **Node.js** instalado (versão 18 ou superior)
  → Baixe em: https://nodejs.org
- **VS Code** instalado

### 2 — Abrir o projeto no VS Code
1. Extraia a pasta `daberling` onde preferir (ex: `Documentos/daberling`)
2. Abra o VS Code
3. Vá em **File → Open Folder** e selecione a pasta `daberling`

### 3 — Instalar dependências
1. No VS Code, abra o **Terminal** (menu Terminal → New Terminal)
2. Digite e pressione Enter:
   ```
   npm install
   ```
   Aguarde — vai baixar o React e o Vite automaticamente.

### 4 — Rodar em modo desenvolvimento
No terminal, digite:
```
npm run dev
```
Abra o navegador em: **http://localhost:5173**

A página vai recarregar automaticamente sempre que você salvar um arquivo.

### 5 — Gerar versão final para publicar
```
npm run build
```
Os arquivos prontos ficam na pasta `dist/`. Você pode hospedar essa pasta no Netlify, Vercel ou qualquer hospedagem.

---

## Como inserir as imagens PNG transparentes

### Imagem do Hero (abaixo do texto principal)
1. Coloque o arquivo PNG em `src/assets/` com o nome `imagem_hero.png`
2. Abra `src/App.jsx`
3. Encontre as linhas no topo do arquivo:
   ```js
   // import heroPng from './assets/imagem_hero.png';
   const heroPng = null;
   ```
4. Substitua por:
   ```js
   import heroPng from './assets/imagem_hero.png';
   ```
   (remova a linha `const heroPng = null;`)

### Imagem do Contato (na seção contato, lado esquerdo)
1. Coloque o arquivo PNG em `src/assets/` com o nome `imagem_contato.png`
2. Abra `src/App.jsx`
3. Encontre:
   ```js
   // import contatoPng from './assets/imagem_contato.png';
   const contatoPng = null;
   ```
4. Substitua por:
   ```js
   import contatoPng from './assets/imagem_contato.png';
   ```
   (remova a linha `const contatoPng = null;`)

---

## Como personalizar conteúdo

Todos os textos, serviços, fases da jornada e contatos estão no arquivo `src/App.jsx`.
As cores e fontes estão todas em `src/App.css` nas variáveis CSS no topo do arquivo:
```css
:root {
  --rose:  #c28a92;
  --terra: #be8675;
  --beige: #d6cec7;
  --dark:  #635c57;
  ...
}
```

---

## Responsividade

A página se adapta a três tamanhos:
- **Desktop** (> 768px): layout em duas colunas
- **Tablet** (≤ 768px): colunas reduzidas, menu hamburguer
- **Mobile** (≤ 480px): layout de coluna única

---

Desenvolvido com ♡ para a daBerling arquitetura e interiores.
