export async function GET() {
  return Response.json([
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
}