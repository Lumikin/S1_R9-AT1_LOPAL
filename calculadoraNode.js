// C:\Users\DES-I1HS\Documents\Explicacoes\S1_R9\Node\introducao.js
// https://github.com/Lumikin/R1_S9.git


// console.log("Seja bem vindo(a) ao node Node.js!!!"); 

const fs = require("fs");
const promptSync = require("prompt-sync")();
const path = require("path");

// Criar uma estrutura de repetição para criar 3 arquivos de texto que solocite o nome do aquivo e o conteudo que deve ser inserido no aquivo.
//let arquivo = promptSync("Digite seu o nome do aquivo: ");

/*

for (let i = 0; i <= 2 ; i++){
    let Arquivos = promptSync(` Digite seu o nome do aquivo ${i+1}: `)
    let Conteudo = promptSync("digite o conteudo: ")
    fs.writeFileSync(Arquivos, Conteudo, "utf-8" )
}

*/

/*
const promptSync = require("prompt-sync")();

let nome = promptSync("Digite seu nome: ");

console.log(nome)
*/

// let conteudo = fs.readFileSync("arquivo.txt", "utf-8"); //Utf8 para ler o txt

// console.log(conteudo);

// let texto = "este é o conteudo do novo arquivo .txt"

// fs.writeFileSync("novoArquivo.txt", texto, "utf-8")

// let novoTexto = "\nSegunda parte do arquivo";

// fs.appendFileSync ("novoArquivo.txt", novoTexto, "utf-8");

// fs.unlinkSync("arquivo.txt")  //deletar um arquivo

/*

let nomeArquivo = "novoArquivo.txt";

if (fs.existsSync(nomeArquivo)){
    fs.unlinkSync(nomeArquivo);
} else {
    console.log("Arquivo não encontrado!")
}

*/

// retorna o caminho que esta sendo ultilizado 
/*
console.log(__dirname) 
// C:\Users\DES-I1HS\Documents\Explicacoes\S1_R9\Node\"Meus arquivos"
const pasta = path.join(__dirname, "Meus arquivos");
fs.mkdirSync(pasta, {recursive:true});

*/

/*
const estruturaDePastas = path.join(__dirname, "Meus Arquivos", "Arquivos Diversos", "Imagens");
fs.mkdirSync(estruturaDePastas, {recursive:true});
*/

/*
const origem = path.join(__dirname, "teste3.txt")
const destino = path.join(`${__dirname}/Meus Arquivos/Arquivos Diversos`, "copia_teste3.txt")

// fs.cpSync(origem, destino, {recursive:true})

fs.renameSync(origem, destino, { recursive: true })

*/

/*

const origem = path.join(__dirname, "Meus Arquivos");
const destino = path.join(`C:\Users\DES-I1HS\Documents`);
// fs.renameSync(origem, destino)

if(fs.existsSync(destino)){
fs.rmSync(destino, {recursive:true});

} else {
console.log("diretorio não localizado")
}

*/

// Criar tres vetores para armazenar: nome peso e altura. Os valores devem ser armazenados enquanto o usuario desejar. Inserir todos os nomes, alturas em colunas, respectivamente, em cada linha do arquivo te texto.
// Para testar, leia o arquivo e apresente o conteudo no console 
nome = []
peso = []
altura = []


do {
    let i = 0; i <= 3 ; i++

    do{
    peso = promptSync(` Digite o peso da pessoa ${i+1}: `)
    } while(isNaN(peso)){
        console.log("salve")
    }