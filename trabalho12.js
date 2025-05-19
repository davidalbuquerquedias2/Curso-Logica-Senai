const leia = require('prompt-sync')({ sigint: true });

var nome, idade, sexo;
var contador = 0;
var contadorM = 0;
var contadorF = 0;

while (contador < 1) {
    nome = leia("Nome do Participante: ");
    idade = leia("Informe a idade do Participante: ");
    sexo = leia("Qual seu Gênero (M/F)? ").toUpperCase();

    if (sexo === "M") {
        contadorM++;
    } else if (sexo === "F") {
        contadorF++;
    } else {
        console.log("Entrada inválida. Por favor, insira 'M' para masculino ou 'F' para feminino.");
        continue; 
    }

    contador++;
}

console.log("Totais de Pessoas Masculinas:", contadorM);
console.log("Totais de Pessoas Femininas:", contadorF);
