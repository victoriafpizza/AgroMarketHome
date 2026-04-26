let codigoGerado = "";

const botaoEnviarCodigo = document.getElementById("enviarCodigo");
const codigoBox = document.getElementById("codigoBox");
const codigoMensagem = document.getElementById("codigoMensagem");
const cadastroForm = document.getElementById("cadastroForm");

botaoEnviarCodigo.addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();

  if (email === "") {
    alert("Digite seu e-mail antes de enviar o código.");
    return;
  }

  codigoGerado = Math.floor(100000 + Math.random() * 900000).toString();

  codigoBox.style.display = "flex";

  alert(
    "Simulação: o código enviado para " + email + " é: " + codigoGerado
  );

  codigoMensagem.textContent = "Código enviado para o e-mail informado.";
});

cadastroForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const codigoDigitado = document.getElementById("codigo").value.trim();

  if (codigoGerado === "") {
    alert("Envie o código de autenticação para o e-mail antes de finalizar.");
    return;
  }

  if (codigoDigitado !== codigoGerado) {
    alert("Código incorreto. Verifique e tente novamente.");
    return;
  }

  alert("Cadastro realizado com sucesso!");
});