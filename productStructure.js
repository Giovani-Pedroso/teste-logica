const products = [
  "preto-PP",
  "preto-M",
  "preto-G",
  "preto-GG",
  "preto-GG",
  "branco-PP",
  "branco-G",
  "vermelho-M",
  "azul-XG",
  "azul-XG",
  "azul-XG",
  "azul-P",
];

module.exports = () => {
  //Separa a cor do tamanho
  const data = products.map((product) => product.split("-"));

  let resultados = {};

  for (let i of data) {
    resultados[i[0]] = {};
  }

  //Inicializa os valores como números
  for (let i of data) {
    resultados[i[0]][i[1]] = 0;
  }

  //Calcula a quantidade de sapatos por cor e tamanho
  for (let i of data) {
    resultados[i[0]][i[1]] += 1;
  }

  return resultados;
};
