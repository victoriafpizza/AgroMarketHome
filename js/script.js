// BUSCA SIMPLES
const input = document.querySelector(".search-box input");
const button = document.querySelector(".search-box button");

button.addEventListener("click", () => {
  const valor = input.value.trim();

  if (valor === "") {
    alert("Digite algo para buscar");
  } else {
    alert("Você buscou por: " + valor);
  }
});

// ENTER PARA BUSCAR
const input = document.querySelector(".search-box input");
const button = document.querySelector(".search-box button");

button.addEventListener("click", () => {
  const valor = input.value.trim();

  if (valor === "") {
    alert("Digite algo para buscar");
  } else {
    window.location.href = `resultado-busca.html?q=${encodeURIComponent(valor)}`;
  }
});
// BOTÃO CTA
const ctaButton = document.querySelector(".cta button");

ctaButton.addEventListener("click", () => {
  alert("Redirecionando para criação de anúncio...");
});

// EFEITO SIMPLES DE SCROLL
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.style.background = "#0b2a1c";
  } else {
    header.style.background = "#123f2a";
  }
});