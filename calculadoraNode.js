// As bibliotecas:
const fs = require("fs");
const promptSync = require("prompt-sync")();
const path = require("path");

// Exemplo:
for (let i = 0; i <= 2 ; i++){
    let Arquivos = promptSync(` Digite seu o nome do aquivo ${i+1}: `)
    let Conteudo = promptSync("digite o conteudo: ")
    fs.writeFileSync(Arquivos, Conteudo, "utf-8" )
}
