const fs = require("fs");
const { console } = require("inspector");
const promptSync = require("prompt-sync")();
const path = require("path");
const PromptSync = require("prompt-sync");
let i = 0;
let encerrar, distancia, media;
let valor = []
let valorEntregas = [];
let Distancia = [];
let pessoa = [];
let valorTotal = 0;
let tipoUrgente



do {

    pessoa = promptSync((`Digite o nome da pessoa ${i+1}: `)) //Atribuir o nome da pessoa
    valor = promptSync((("digite o valor por kilometro: "))) // o valor do quilometro
    distancia = promptSync((("digite a distancia em Kilometros: ")))// e a distancia em kilometro 
    tipoUrgente = promptSync((("Tipo de entrega (1 para normal e 0 para urgente): "))) // Se for 1 vai ser Normal e 0 para urgente)

    
        if (tipoUrgente == 0) { // Estrutura condicional

            valorEntregas[i] = distancia * (valor * 1.2); // Calculo caso a entrega seja urgente.
            console.log(`dista: ${distancia}`);
            console.log(`val: ${valor}`);
            console.log(`Entrega if: ${valorEntregas[i]}`);


        } else {

            valorEntregas[i] = distancia * valor; // Calculo caso a entrega seja normal.


        }
        valorTotal += valorEntregas[i]; // Calculo do valor Total (total de entregas).
        console.log(`Entregas: ${valorEntregas}`);
        console.log(`i: ${i}`);
        console.log(`Valor total: ${valorTotal}`);
        encerrar = promptSync("deseja encerrar? 0 para sim e 1 para não: ");
        i++;

   



} while ( encerrar == 1);

    console.log(valorEntregas)
    media = valorTotal / i; // Calculo média, após o calculo do valor total.
    console.log(media);
    valorTotal = valorTotal; // Aredondamento para 2 casas decimais
    media = media; // Arredondamento para 2 casas decimais

