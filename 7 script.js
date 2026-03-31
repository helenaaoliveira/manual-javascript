// Declaração da função sem parâmetros
function saudar() {
  console.log("Olá, seja bem-vindo!");
}
// Chamada da função
saudar(); // Saída: Olá, seja bem-vindo!




// A função recebe 'nome' como parâmetro
function saudar(nome) {
  console.log("Olá, " + nome + "!");
}
// Chamando a função com diferentes argumentos
saudar("Maria"); // Saída: Olá, Maria!
saudar("João");  // Saída: Olá, João!




// Exemplo de função que retorna valor
function somar(a, b) {
    return a + b; // Retorna a soma
}
// Armazenando o valor retornado em uma variável
let resultado = somar(5, 3);
console.log(resultado); // Saída: 8
