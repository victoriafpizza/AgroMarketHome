fetch("http://localhost:3000/api/produtos")
  .then((response) => response.json())
  .then((produtos) => {
    const lista = document.getElementById("lista-produtos");

    lista.innerHTML = produtos
      .map(
        (produto) => `
          <div class="produto-card">
            <h3>${produto.nome}</h3>
            <p>Categoria: ${produto.categoria}</p>
            <p>Preço: R$ ${produto.preco.toLocaleString("pt-BR")}</p>
          </div>
        `
      )
      .join("");
  })
  .catch((erro) => {
    console.error("Erro ao buscar produtos:", erro);
  });