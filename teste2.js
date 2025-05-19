const leia = require("prompt-sync")({sigint: true});
var nome,nota,materia,contadorMate,contadorPor,contador
contador=0;
contadorMate=0;
contadorPor=0;

while (true){

let opcao = leia("deseja continuar? digite 'sim' para continuar ou 'sair' para encerrar")
if (opcao === "SAIR"){
    console.log("Encerrando o programa...");
    break;
} else if (opcao !== "sim"){
    console.log("Continuando");
    continue;
}
    nome=leia("Nome do Estudante: ")
    nota=leia("Informe sua nota geral das ultimas matérias: ")
    nota=parseFloat(nota)
    materia=leia("Informe a matéria da nota: ")

    if (nota >= 8) {
        console.log("Sua nota está boa ")
    }
    else if (nota <= 8) {
           console.log("Sua nota pode melhorar ")
    }
    else  {
         conseole.log("Nota não reconhecida pelo sistema ")
    }
    if (materia.toLowerCase() === "matemática "){
        contadorMate++;
    } else if (materia.toLowerCase() === "português ") {
       contadorPor++;
    } 
    else  {
        console.log("Matéria não reconhecida. ");
    }

}
conseole.log("Total de registros:" , contador)
conseole.log("Notas de Matermática:", contadorMate)
conseole.log("Notas de português:" , contadorPor)


