const fs = require("fs");
const promptSync = require("prompt-sync")();
const path = require("path");
const PromptSync = require("prompt-sync");
let i = 0; i <= 0; i++
let prompt, entrega, urgente, normal, encerrar, valor, Distancia, Pessoa


do {

    Pessoa = promptSync((`Digite o nome da pessoa ${i}: `)) //Atribuir o nome da pessoa
    valor = promptSync((("digite o valor por kilometro: "))) // o valor do quilometro
    Distancia = promptSync((("digite a distancia em Kilometros: ")))// e a distancia em kilometro 
    entrega = promptSync((("Tipo de entrega (1 para normal e 0 para urgente): "))) // Se for 1 vai ser Normal e 0 para urgente)
    
    if (entrega == 1) {
        let processamento = valor * Distancia
        console.log(`${processamento}`)
           

        // fs.writeFileSync(Arquivos, Conteudo, "utf-8" 

    } else{
        console.log("awwwaa")
    }
} while ((isNaN(valor)) && (isNaN(Distancia)));


/*

do {

if (tipoUrgente = true) { // Estrutura condicional 

    valorEntregas [i] = distancia * (valor * 1,2); // Calculo caso a entrega seja urgente.
    i++;

} else {

    valorEntregas [i] = distancia * valor; // Calculo caso a entrega seja normal.
    i++;

}
    valorTotal = valorTotal + valorEntregas; // Calculo do valor Total (total de entregas).

} while (encerrar = false);

    media = valorTotal / i; // Calculo média, após o calculo do valor total.

    valorTotal = valorTotal.toFixed(2); // Aredondamento para 2 casas decimais
    media = media.toFixed(2); // Arredondamento para 2 casas decimais


// Espaço para colocar o histórico de calculo em um arquivo de Texto.



console.log(O valor das entregas foram: ${valorTotal}. A do costo por entrega é: ${média}. ) // Exibição dos valores calculados.

*/