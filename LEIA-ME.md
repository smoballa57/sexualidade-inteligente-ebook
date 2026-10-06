# 🔴 SEXUALIDADE INTELIGENTE - Landing Page Profissional

Uma landing page de alta conversão, responsiva e profissional para vender o eBook "Sexualidade Inteligente".

---

## 📁 Estrutura do Projeto

```
/
├── index.html          # Página principal (HTML completo)
├── style.css           # Estilos CSS3 (tema preto, vermelho e branco)
├── script.js           # JavaScript (menu, accordion, CTA, animações)
├── assets/             # Pasta para imagens
│   ├── capa-ebook.png  # Imagem da capa (VOCÊ DEVE ADICIONAR)
│   └── README.md       # Instruções para adicionar a capa
└── LEIA-ME.md          # Este arquivo
```

---

## 🚀 Como Usar

### 1. Abrir a Página

Simplesmente abra o arquivo `index.html` em qualquer navegador:

- **Windows:** Clique duas vezes em `index.html`
- **Mac/Linux:** Arraste para o navegador ou use `open index.html`
- **Web:** Coloque os arquivos em um servidor web

### 2. Adicionar a Imagem da Capa

1. Prepare a imagem da capa do eBook (PNG ou JPG)
2. Coloque na pasta `assets/` com o nome exato: **`capa-ebook.png`**
3. A imagem aparecerá automaticamente em duas seções da página

Veja `assets/README.md` para especificações técnicas.

### 3. Configurar Preço

Edite o arquivo `script.js`:

```javascript
const ebookPrice = "R$ 97,00";  // ← MUDE PARA SEU PREÇO
```

A página atualizará automaticamente em todos os lugares.

### 4. Configurar URL de Checkout

Edite o arquivo `script.js`:

```javascript
const checkoutUrl = "#";  // ← MUDE PARA SEU LINK DE PAGAMENTO
```

Exemplos:
- Hotmart: `https://hotmart.com/product/...`
- Gumroad: `https://gumroad.com/l/...`
- Seu próprio checkout: `https://seu-site.com/comprar`

Todos os botões "COMPRAR" e "QUERO MEU EBOOK" usarão esse link.

---

## 🎨 Identidade Visual

### Cores

- **Fundo:** Preto intenso (`#0a0a0a`)
- **Vermelho Destaque:** Vermelho intenso (`#dc143c`)
- **Vermelho Escuro:** Vermelho escuro (`#8b0000`)
- **Texto:** Branco (`#ffffff`)
- **Acentos:** Cinza claro (`#f0f0f0`)

### Fontes

- **Títulos:** Bebas Neue (impactante, cinematográfica)
- **Subtítulos:** Montserrat (profissional, moderna)
- **Corpo:** Inter (legível, clara)

Todas são carregadas via Google Fonts (CDN).

### Tema

- Estética cinematográfica e sofisticada
- Alto contraste para leitura fácil
- Gradientes sutis
- Efeitos de luz vermelha discreta
- Design premium e adulto

---

## 📋 Seções da Página

1. **HERO** - Impacto inicial com CTA principal
2. **PROBLEMA** - 4 cards: Mitos, Insegurança, Falta de Conhecimento, Falta de Comunicação
3. **APRESENTAÇÃO DO EBOOK** - Mockup + descrição com lista de recursos
4. **O QUE VOCÊ VAI APRENDER** - 10 cards com temas cobertos
5. **CONTEÚDO DO EBOOK** - 10 tópicos principais numerados
6. **BENEFÍCIOS** - 6 benefícios reais, sem promessas falsas
7. **PARA QUEM É** - 5 personas/casos de uso
8. **O QUE VOCÊ RECEBE** - 4 itens (eBook, Digital, Compatibilidade, Imediatez)
9. **OFERTA** - Seção de preço e CTA de compra
10. **FAQ** - 7 perguntas expansíveis (accordion)
11. **CTA FINAL** - Chamada final impactante
12. **FOOTER** - Links e informações legais

---

## 📱 Responsividade

A página é totalmente responsiva e funciona perfeitamente em:

- ✅ Desktop (1200px+)
- ✅ Laptop (1024px - 1199px)
- ✅ Tablet (768px - 1023px)
- ✅ Smartphone (360px - 767px)

### Características Mobile

- Menu hambúrguer automático
- Botões grandes (fácil de clicar)
- Textos redimensionados automaticamente
- CTA fixa na parte inferior (elegante e conversora)
- Sem rolagem horizontal
- Espaçamento otimizado

---

## ⚡ Funcionalidades JavaScript

### Menu Responsivo
- Menu hamburguês em dispositivos menores
- Fecha ao clicar em um link
- Fecha ao clicar fora

### Accordion FAQ
- Clique para expandir/colapsar perguntas
- Apenas uma pergunta aberta por vez
- Ícone animado (+/✕)

### CTA Mobile Fixo
- Aparece/desaparece ao scrollar
- Fixa na parte inferior em celulares
- Não atrapalha a navegação

### Scroll Suave
- Links internos fazem scroll suave
- Animações ao entrar na viewport

### Gerenciamento de URLs
- Uma única variável para preço: `ebookPrice`
- Uma única variável para checkout: `checkoutUrl`
- Altere apenas uma vez e afeta toda a página

---

## 🔍 SEO Básico

A página inclui:

- ✅ `<title>` otimizado
- ✅ Meta description
- ✅ Open Graph (compartilhamento em redes sociais)
- ✅ Viewport meta (responsividade)
- ✅ Charset UTF-8

---

## 📝 Conteúdo

Todos os textos estão em português brasileiro profissional:

- ✅ Linguagem clara e acessível
- ✅ Sem vulgaridades
- ✅ Sem promessas médicas falsas
- ✅ Sem depoimentos inventados
- ✅ Sem afirmações absolutas
- ✅ Baseado em educação consciente

---

## 🎯 Copywriting & Conversão

### Técnicas Implementadas

- **Hierarquia visual:** Títulos grandes, subtítulos destacados
- **CTA ao longo da página:** Múltiplos pontos de conversão
- **Urgência suave:** "Acesso Digital • Leitura Imediata"
- **Social proof:** Sem inventar, mas espaço preparado
- **Benefícios claros:** Foco no que o cliente ganha
- **Personalização:** "Para quem é" mostra relevância

### Botões

- Todos os botões de CTA apontam para `checkoutUrl`
- Design consistente em toda a página
- Hover effects chamando atenção
- Textos claros e imperativos

---

## 🛠️ Personalização

### Mudar Cores

Edite o arquivo `style.css`, no topo:

```css
:root {
    --color-red-intense: #dc143c;  /* Mude para sua cor */
    --color-red-dark: #8b0000;     /* Vermelho escuro */
    /* ... demais cores */
}
```

### Mudar Fontes

Edite o `style.css`:

```css
--font-display: 'Sua Fonte Display';
--font-heading: 'Sua Fonte Heading';
--font-body: 'Sua Fonte Body';
```

Ou remova/altere o link no `<head>` do `index.html`.

### Adicionar Mais Seções

A estrutura é modular. Basta copiar uma seção e adaptar o conteúdo.

### Remover Seções

Você pode remover qualquer seção sem quebrar a página (exceto `<header>` e `<footer>`).

---

## 📞 Integração com Pagamento

### Hotmart

```javascript
const checkoutUrl = "https://hotmart.com/product/seu-ebook-id";
```

### Gumroad

```javascript
const checkoutUrl = "https://gumroad.com/l/seu-ebook-slug";
```

### Seu Próprio Sistema

```javascript
const checkoutUrl = "https://seu-site.com/checkout?ebook=sexualidade-inteligente";
```

---

## 🚨 Checklist Final

Antes de publicar, verifique:

- [ ] Imagem da capa adicionada em `assets/capa-ebook.png`
- [ ] Preço configurado em `script.js`
- [ ] URL de checkout configurada em `script.js`
- [ ] Testado em desktop, tablet e celular
- [ ] FAQ respondendo corretamente
- [ ] Menu responsivo funcionando
- [ ] Todos os botões apontando para checkout
- [ ] Links de footer funcionando
- [ ] Nenhum erro no console do navegador
- [ ] Página carrega rápido (otimizada)

---

## 🎬 Performance

A página é otimizada para:

- ✅ Carregamento rápido
- ✅ Compressão de CSS/JS
- ✅ Fontes via CDN
- ✅ Imagens otimizadas
- ✅ Sem scripts pesados
- ✅ Sem dependências externas desnecessárias

---

## 📄 Arquivos

| Arquivo | Tamanho | Descrição |
|---------|---------|-----------|
| index.html | ~40KB | Página HTML completa |
| style.css | ~30KB | Estilos CSS3 |
| script.js | ~8KB | JavaScript funcionalidades |
| assets/ | - | Pasta para imagens |

**Total:** ~78KB (sem a imagem da capa)

---

## 🐛 Troubleshooting

### "A imagem da capa não aparece"
- Certifique-se de que está em `assets/capa-ebook.png`
- Verifique a extensão (deve ser `.png` ou `.jpg`)
- Abra o console do navegador (F12) para ver erros

### "Os botões não funcionam"
- Verifique se `checkoutUrl` foi configurado em `script.js`
- Não deixe como `"#"`, configure com um link real

### "O menu responsivo não funciona"
- Verifique se `script.js` foi carregado
- Abra o console (F12) para ver erros de JavaScript

### "A página não responde bem no celular"
- Limpe o cache do navegador
- Teste em modo incógnito
- Verifique a viewport (deve estar em `<head>`)

---

## 📞 Suporte

Se encontrar problemas:

1. Verifique o console do navegador (F12)
2. Leia este arquivo novamente
3. Verifique os comentários no código

---

## 📄 Licença

Este código é fornecido para uso comercial da landing page "Sexualidade Inteligente".

Você pode:
- ✅ Modificar o conteúdo
- ✅ Usar em produção
- ✅ Integrar com seus sistemas de pagamento
- ✅ Clonar para múltiplas landing pages

---

## 🎉 Pronto!

Sua landing page está completa e pronta para usar. Basta:

1. Adicionar a capa do eBook
2. Configurar preço e URL de checkout
3. Abrir `index.html`
4. Começar a vender!

Boa sorte! 🚀

---

**Última atualização:** 2026-09-30
**Versão:** 1.0
**Status:** ✅ Pronto para produção
