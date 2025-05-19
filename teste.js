const leia = require('prompt-sync')({ sigint: true });
var nome, idade, contadorUSP, contadorCASADOCARALHO, contadorUNISINOS, universidade;
var contador = 0;
contadorUSP = 0;
contadorUNISINOS = 0;
contadorCASADOCARALHO = 0;

while (contador < 1) {
    nome = leia("Nome do Participante: ");
    idade = leia("Informe a idade do participante: ");
    console.log("Opções de universidade: USP, UNISINOS, CASA DO CARALHO");
    universidade = leia("Qual sua universidade: ");

    if (universidade.toUpperCase() === "USP") {
        contadorUSP++;
    }
    if (universidade.toUpperCase() === "UNISINOS") {
        contadorUNISINOS++;
    }
    if (universidade.toUpperCase() === "CASA DO CARALHO") {
        contadorCASADOCARALHO++;
    }
    else {
        console.log("UNIVERSIDADE NÃO RECONHECIDA");
    }
    contador++;
}

console.log("Totais da universidade USP:", contadorUSP);
console.log("Totais da universidade UNISINOS:", contadorUNISINOS);
console.log("Totais da CASA DO CARALHO:", contadorCASADOCARALHO);