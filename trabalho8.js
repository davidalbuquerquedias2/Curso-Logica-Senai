const leia = require('prompt-sync')({sigint:true});
var numero,contador;

numero=0;
contador=0;

while (contador < 10)
{
    numero=leia("Informe um número: ")
    console.log("Número: ",numero," x ",contador," = ",numero*contador)
    contador++;
}