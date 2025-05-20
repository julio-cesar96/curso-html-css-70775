# Aula: Animações e Transições no CSS

## Objetivo:

Aprender a aplicar transformações, transições e animações em seus projetos.

---

## 1️⃣ Introdução a Transformações (Transform)

Transformações permitem modificar a aparência e a posição de um elemento sem afetar o fluxo do layout. Usando `transform`, podemos:

* **translate**: mover elementos no eixo X e Y.
* **rotate**: rotacionar o elemento.
* **scale**: redimensionar (aumentar ou diminuir).
* **skew**: inclinar em um ângulo específico.

```css
.elemento {
    transform: translate(50px, 100px); /* Move 50px para direita e 100px para baixo */
    transform: rotate(45deg);          /* Rotaciona 45 graus */
    transform: scale(1.5);            /* Aumenta 50% do tamanho original */
    transform: skew(20deg, 10deg);    /* Inclina em X e Y */
}
```

---

## 2️⃣ Transições (Transition)

As transições permitem animar mudanças de propriedades CSS de forma suave, ao longo de um período de tempo.

**Sintaxe básica:**

```css
.elemento {
    transition: property duration timing-function delay;
}
```

* **property**: propriedade a ser animada (ex.: `width`, `background-color`).
* **duration**: duração da animação (ex.: `2s`, `500ms`).
* **timing-function**: define a aceleração (ex.: `ease`, `linear`, `ease-in-out`).
* **delay**: tempo de espera antes de iniciar (opcional).

**Exemplo:**

```css
.button {
    background-color: #4CAF50;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: #45a049;
}
```

---

## 3️⃣ Animações (Animation)

As animações permitem mudanças mais complexas no estilo de um elemento em etapas definidas.

**Sintaxe básica:**

```css
@keyframes nomeDaAnimacao {
    from {
        /* Estilo inicial */
    }
    to {
        /* Estilo final */
    }
}

.elemento {
    animation: nomeDaAnimacao duration timing-function delay iteration-count direction;
}
```

* **duration**: tempo de execução da animação.
* **iteration-count**: quantidade de vezes que a animação deve repetir.
* **direction**: sentido da animação (`normal`, `reverse`, `alternate`).

**Exemplo:**

```css
@keyframes moverParaDireita {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(200px);
    }
}

.caixa {
    animation: moverParaDireita 2s ease-in-out 1;
}
```

---

## 4️⃣ Funções de Tempo (Timing Functions)

As funções de tempo controlam a aceleração da animação:

* **linear**: velocidade constante.
* **ease**: acelera e desacelera de forma suave.
* **ease-in**: acelera no início.
* **ease-out**: desacelera no final.
* **ease-in-out**: acelera e desacelera.

---

## 5️⃣ Propriedades Adicionais

* **animation-delay**: define um atraso para o início.
* **animation-iteration-count**: define quantas vezes a animação é executada (ex.: `infinite`).
* **animation-direction**: controla a direção (`normal`, `reverse`, `alternate`).

**Exemplo:**

```css
@keyframes piscar {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
}

.texto {
    animation: piscar 1s infinite alternate;
}
```

---

## 6️⃣ Exemplos Práticos e Casos de Uso

* Botões animados ao passar o mouse.
* Imagens que deslizam suavemente.
* Elementos que piscam para chamar atenção.
* Menus que se expandem suavemente.

---

## 7️⃣ Desafio para Praticar

Crie um botão que, ao ser clicado, se expanda, mude de cor e rotacione 360º em 2 segundos.

---

## 🔗 Referências:

* [Documentação MDN sobre CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
* [Documentação MDN sobre CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

