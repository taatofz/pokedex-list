const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaotrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("dark-theme");

  body.classList.toggle("dark-theme");

  if (modoEscuroEstaAtivo) {
    imagemBotaotrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  } else {
    imagemBotaotrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});
