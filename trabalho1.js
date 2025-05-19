const leia = require("prompt-sync")({ sigint: true });
var nome, nota;
nome = leia("Informe o nome do aluno: ");
nota = leia("Informe a nota do aluno: ");
if (nota >= 7) {
    console.log("Você foi aprovado");
} else {
    console.log("Você foi reprovado");
}
