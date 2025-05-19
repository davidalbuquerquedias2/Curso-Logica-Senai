const leia = require("prompt-sync")({ sigint: true });
var cor;

cor = leia("Digite sua cor: ").toUpperCase();
if (cor == "VERMELHO") {
    console.log("Você é colorado 😡 ");
}
if (cor == "AZUL") {
    console.log("Você é Gremista 🥶 ");
}
if (cor == "VERDE") {
    console.log("Você torce P/ Juventude 🏴 ");
}
