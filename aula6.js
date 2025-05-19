const leia = require('prompt-sync')({ sigint: true });
var nome, qtd, valor, total;
nome = leia("Nome Mercadoria: ")
qtd = leia("Informe a quantidade da mercadoria: ")
valor = leia("Informe o valor da mercadoria: ")
console.log("Valor total: ", total)
total = qtd * valor;
console.log(total)
if (total >= 100) {
    console.log("Recebe desconto")
}
else {
    console.log("Não recebe desconto")
}
