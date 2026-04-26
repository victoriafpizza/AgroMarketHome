const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend do AgroMarket rodando!");
});

app.get("/api/produtos", (req, res) => {
  res.json([
    {
      id: 1,
      nome: "Trator Massey Ferguson",
      preco: 150000,
      categoria: "Máquinas",
    },
    {
      id: 2,
      nome: "Sacas de milho",
      preco: 80,
      categoria: "Grãos",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});