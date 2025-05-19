const entrada = require("prompt-sync")({ sigint: true });

var nome;
var salario;
var soma;
var contador;

contador = 0;
salario = 0;
soma = 0;

while (contador < 5) {
    nome = entrada("Digite o nome do funcionário: ");
    salario = entrada("Informe o salário do funcionário: ");
    salario = parseFloat(salario);

    if (salario > 500) {
        soma = soma + salario;
    }
    contador++;
    soma;
}
console.log("Soma dos Salários maiores que R$ 500,00: ", soma);
