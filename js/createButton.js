/**
 * Função que cria e adiciona um botão ao elemento raiz
 * @param {string} texto - O texto do botão
 * @param {Object} atributos - Objeto com atributos adicionais para o botão
 * @param {Object} estilos - Objeto com estilos CSS para o botão
 */
function createComponent(texto = "Clique aqui", atributos = {}, estilos = {}) {
  // Passo 2: Obtemos a referência para o elemento raiz
  const rootElement = document.getElementById("root"); // captura a div com id "root"

  // Verificamos se o elemento raiz existe
  if (!rootElement) {
    console.error("Elemento raiz não encontrado!");
    return; // Saímos da função se não existir
  }

  // Passo 3: Criamos um elemento botão
  const botao = document.createElement("button");

  // Definimos o texto do botão
  botao.textContent = texto;

  // Aplicamos os atributos adicionais (se fornecidos)
  for (const [chave, valor] of Object.entries(atributos)) {
    botao.setAttribute(chave, valor);
  }

  // Aplicamos os estilos CSS (se fornecidos)
  for (const [propriedade, valor] of Object.entries(estilos)) {
    botao.style[propriedade] = valor;
  }

  // Passo 4: Adicionamos o botão ao elemento raiz
  rootElement.appendChild(botao);

  // Retornamos a referência do botão criado para possível uso posterior
  return botao;
}

// Exemplo de uso básico - cria um botão simples
createComponent();

// Exemplo com parâmetros - texto personalizado
createComponent("Enviar");

// Exemplo com atributos e estilos personalizados
createComponent(
  "Botão Especial",
  {
    id: "botao-especial",
    class: "btn-destaque",
    "data-id": "principal",
  },
  {
    backgroundColor: "#4CAF50",
    color: "white",
    fontWeight: "bold",
    borderRadius: "4px",
    border: "none",
  }
);

// Exemplo com evento de clique
const botaoInterativo = createComponent("Clique-me");
botaoInterativo.addEventListener("click", function () {
  alert("Você clicou no botão!");
});
