const entrada = require("prompt-sync")({ sigint: true });
var nome, Sexo, contadorM, contadorF, contador, salario, salarioM, salarioF;

contador = 0;
contadorM = 0;
contadorF = 0;
salario = 0;
total = 0;
salarioF = 0;
salarioM = 0;

while (contador < 10) {
    nome = entrada("Digite seu nome: ");
    salario = entrada("Digite seu salário ");
    salario = parseFloat(salario);
    total = total + salario;
    sexo = entrada("Digite seu sexo: ").toUpperCase();

    if (sexo == "F") {
        contadorF++;
        salarioF = salarioF + salario;
    }
    if ((sexo = "M")) {
        contadorM++;
        salarioM = salarioM + salario;
    }
    contador++;
}
console.log("A quantidade de funcionários masculinos é: ", contadorM);
console.log("A soma do salário masculino é: ", salarioM);
console.log("A quantidade de funcionários femininos é: ", contadorF);
console.log("A soma do salário feminino é: ", salarioF);
