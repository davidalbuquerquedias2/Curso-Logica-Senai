const leia = require('prompt-sync')({ sigint: true });
var nome, valor, total, contador;
valor = 0;
total = 0;
contador = 0;

while (contador < 5) {
    nome = leia("Informe o nome da mercadoria: ")
    valor = leia("Informe o valor da mercadoria: ")
    valor = parseFloat(valor)
    total = total + valor
    contador++;
}
console.log("A soma total das mercadorias é: ", total)