const leia = require("prompt-sync")({ sigint: true });
var nome, profissao, contador;
contador = 0;

while (contador < 5) {
  nome = leia("Informe o seu nome: ");
  profissao = leia("Informe a sua vaga de trabalho: ");
  contador++;
}
