const leia = require("prompt-sync")({ sigint: true });
var nome, salario, soma, contador, contador1;

contador = 0;
salario = 0;
soma = 0;
contador1 = 0;

while (contador < 5) {
    nome = leia("Digite seu nome: ");
    salario = leia("Digite seu salário: ");
    salario = parseFloat(salario);

    soma = soma + salario;

    contador++;
}
console.log("A soma dos salários: ", soma);
