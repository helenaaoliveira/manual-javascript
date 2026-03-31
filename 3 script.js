//var
var nome = "João";

console.log(nome);


//let
let idade = 20;

console.log(idade);


//const
const PI = 3.14;

console.log(PI);




//Escopo Global
let mensagem = "Olá, mundo!"; 

function exibirMensagem() {
  // Acesso à variável global dentro de uma função
  console.log(mensagem);
}

exibirMensagem(); // Saída: Olá, mundo!
console.log(mensagem); // Saída: Olá, mundo!



//Escopo de função
let nome = "Global";

function teste() {
    let nome = "Local"; // Variável diferente da global
    console.log(nome); // Saída: "Local"
}

teste();
console.log(nome); // Saída: "Global"



//Escopo de bloco
{
  let mensagem = "Olá";
  const nome = "Mundo";
  console.log(mensagem + " " + nome); // Saída: Olá Mundo
}

// console.log(mensagem); // Erro: mensagem is not defined
// console.log(nome);     // Erro: nome is not defined

// Exemplo em estrutura de controle (if)
let usuarioLogado = true;
if (usuarioLogado) {
  let mensagemSecreta = "Bem-vindo!";
  console.log(mensagemSecreta); // Funciona
}
// console.log(mensagemSecreta); // Erro: mensagemSecreta is not defined