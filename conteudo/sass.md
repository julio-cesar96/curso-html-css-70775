# Introdução ao SASS

## O que é SASS?

SASS (Syntactically Awesome Stylesheets) é uma linguagem de extensão do CSS. Ele permite escrever estilos de forma mais organizada e reaproveitável.

Com SASS, você pode usar:

* **Variáveis** (para guardar cores, tamanhos, etc.)
* **Aninhamento** (como no HTML)
* **Mixins** (blocos de código reutilizáveis)
* **Importações** (dividir o CSS em arquivos menores)
* **Funções** (para cálculos e lógica simples)

---

## Vantagens de usar SASS

* Facilita a **organização do código**.
* Permite **reutilizar estilos** com variáveis e mixins.
* Escreve-se **menos código** e com mais clareza.
* Ajuda a **manter o projeto** limpo e padronizado.

---

## Como configurar o SASS no seu projeto

### 1. Instale o SASS (precisa do Node.js instalado)

Abra o terminal e digite:

```bash
npm install -g sass
```

### 2. Crie seus arquivos

* Crie um arquivo SASS com extensão `.scss` (ex: `estilo.scss`).
* Crie seu HTML normalmente.
* Compile o `.scss` em `.css` com:

```bash
sass estilo.scss estilo.css
```

### 3. Link o CSS no HTML

No seu HTML, inclua o CSS compilado:

```html
<link rel="stylesheet" href="estilo.css">
```

---

## Como deixar o SASS funcionando automaticamente

Use o modo "watch" para o SASS compilar o `.scss` toda vez que você salvar:

```bash
sass --watch estilo.scss:estilo.css
```

Isso evita ter que compilar manualmente toda hora.

---

## Exemplos básicos de SASS

### Variáveis

```scss
$cor-principal: #F5DEB4;

body {
  background-color: $cor-principal;
}
```

### Aninhamento

```scss
nav {
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
}
```

### Mixins

```scss
@mixin centralizado {
  display: flex;
  justify-content: center;
  align-items: center;
}

.caixa {
  @include centralizado;
}
```

---

## Resumo

* SASS é uma forma melhorada de escrever CSS.
* É preciso **instalar e compilar** o `.scss` para gerar o `.css`.
* Use `sass --watch` para compilar automaticamente.
* Com ele, seu CSS fica mais organizado, limpo e fácil de manter.

---

## Dica extra

Você pode criar uma estrutura assim para seu projeto:

```
meu-projeto/
│
├── index.html
├── estilo.scss
├── estilo.css (gerado pelo SASS)
```

Compile sempre o `.scss` para gerar o `.css` final que será usado no HTML.
