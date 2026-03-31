//document
function mudarTexto(){
    document.getElementById("titulo").textContent = "Texto alterado";
}


//getElementById()
function alterar(){
    document.getElementById("mensagem").textContent = "Mensagem alterada!";
}


//querySelector()
function mudar(){
    document.querySelector(".texto").textContent = "Texto modificado";
}


//.value
function mostrar(){
    let nome = document.getElementById("nome").value;
    document.getElementById("resultado").textContent = nome;
}


//.checked
function verificar(){
    let marcado = document.getElementById("aceito").checked;

    if(marcado){
        document.getElementById("msg").textContent = "Termos aceitos";
    } else{
        document.getElementById("msg").textContent = "Termos não aceitos";
    }
}


//.textContent
function trocar(){
    document.getElementById("texto").textContent = "Texto novo";
}


//.style
function colorir(){
    document.getElementById("frase").style.color = "red";
}


//classList
function destacar(){
    document.getElementById("texto").classList.add("destaque");
}


//addEventListener()
document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("msg").textContent = "Botão clicado!";
});


//querySelectorAll()
function mudar(){
    let itens = document.querySelectorAll(".item");

    itens.forEach(function(i){
        i.style.color = "blue";
    });
}


//checkValidity()
function verificar(){
    let campo = document.getElementById("email");

    if(campo.checkValidity()){
        alert("Email válido");
    }else{
        alert("Email inválido");
    }
}


//DOMContentLoaded
document.addEventListener("DOMContentLoaded", function(){
    console.log("Página carregada!");
});


//createElement()
let p = document.createElement("p");
p.textContent = "Novo parágrafo";

document.body.appendChild(p);


//appendChild()
let li = document.createElement("li");
li.textContent = "Novo item";

document.getElementById("lista").appendChild(li);


//remove()
function remover(){
    document.getElementById("apagar").remove();
}