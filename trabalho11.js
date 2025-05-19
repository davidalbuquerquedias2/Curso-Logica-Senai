const leia = require('prompt-sync')({ sigint: true })
var nome, nomejr, idade, idadejr, pensao;
idade = 0;
idadejr = 0;
pensao = 0;

nome = leia("Digite seu nome: ");
idade = leia("Digite sua idade: ");
nomejr = leia("Digite o nome de seu filho: ");
idadejr = leia("Digite a idade de seu filho: ");
idade = parseFloat(idade)
idadejr = parseFloat(idadejr)
pensao = parseFloat(pensao)

pensao = pensao + idade + idadejr

console.log("pelos meus calculos, ", pensao)