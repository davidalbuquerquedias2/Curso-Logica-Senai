const leia = require("prompt-sync")({ sigint: true });
var nome, contador;
contador = 0;

while (contador < 6) {
  nome = leia("Digite seu nome:");

  contador++;
}

console.log("total de clientes cadastrados: ", contador);
