//if
let hora = 10;
if (hora < 12) {
    console.log("Bom dia!");
}


//if...else
let ligado = false;
if (ligado) {
    console.log("O sistema está ligado.");
} else {
    console.log("O sistema está desligado.");
}


//switch
let fruta = "maçã";

switch (fruta) {
  case "banana":
    console.log("É uma banana.");
    break;
  case "maçã":
    console.log("É uma maçã."); // Esta linha será executada [7]
    break;
  default:
    console.log("Fruta desconhecida.");
}