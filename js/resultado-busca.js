const ofertas = [
  {
    nome: "Milho",
    tipo: "Produto agrícola",
    preco: "R$ 89,90 / saca",
    icone: "fa-wheat-awn"
  },
  {
    nome: "Trator Agrícola",
    tipo: "Máquina para locação",
    preco: "R$ 450 / dia",
    icone: "fa-tractor"
  },
  {
    nome: "Frete de Grãos",
    tipo: "Transporte agro",
    preco: "R$ 2.500",
    icone: "fa-truck"
  }
];

const params = new URLSearchParams(window.location.search);
const busca = params.get("q")?.toLowerCase() || "";

const termoBusca = document.getElementById("termoBusca");
const listaResultados = document.getElementById("listaResultados");
const semResultados = document.getElementById("semResultados");

termoBusca.textContent = `Você pesquisou por: ${busca}`;

const resultados = ofertas.filter(oferta =>
  oferta.nome.toLowerCase().includes(busca) ||
  oferta.tipo.toLowerCase().includes(busca)
);

if (resultados.length === 0) {
  semResultados.style.display = "block";
} else {
  resultados.forEach(oferta => {
    listaResultados.innerHTML += `
      <div class="resultado-card">
        <i class="fa-solid ${oferta.icone}"></i>
        <h3>${oferta.nome}</h3>
        <p>${oferta.tipo}</p>
        <strong>${oferta.preco}</strong>
      </div>
    `;
  });
}