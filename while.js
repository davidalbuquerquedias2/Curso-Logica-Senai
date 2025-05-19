const leia = require ('prompt-sync')({sigint:true})
var nome, contador;
contador=0
while (contador < 5) //é necessario o contador para o programa identificar que se o loop chegar a 5, ele para.
{
    nome=leia("Informe o seu nome: ")
    contador++;
    //o contador ++ é necessário para o programa contar os loop e identificar quando o loop chegar a 5
    //e ele parar de fazer um loop.
}