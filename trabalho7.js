const leia = require('prompt-sync')({sigint:true});
var nome,senha, contadorS,contadorN,contador;
contador=0;
contadorS=0
contadorN=0

while(contador < 6)
{
    nome=leia("Informe o seu nome: ")
    senha=leia("Informe a sua senha: ")
    if(senha==nome)
    {
        contadorS++;
        console.log("Acesso liberado")
    }
    else
    {
        contadorN++;
        console.log("Acesso negado")
    }
    contador++;
}
console.log("Pessoas que tiveram acesso LIBERADO na conta do banco: ",contadorS)
console.log("Pessoas que tiveram acesso NEGADO na conta do banco: ",contadorN)