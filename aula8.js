const leia = require('prompt-sync')({ sigint: true });

var contador = 0;
var contadorF = 0;
var contadorM = 0;

while (contador < 5) {
    var nome_cliente = leia("Informe nome do Cliente: ");
    var sexo_cliente = leia("Informe o sexo do cliente: ");

    if (sexo_cliente.toUpperCase() === "F") {
        contadorF++;
    } else if (sexo_cliente.toUpperCase() === "M") {
        contadorM++;
    } else {
        console.log("Sexo inválido. Por favor, insira 'M' ou 'F'.");
        continue; // Volta ao início do loop
    }

    contador++;
}

console.log("Femininos: ", contadorF);
console.log("Masculinos: ", contadorM);
