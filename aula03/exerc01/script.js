let valor;
const btn = document.getElementById("enviar");
const resultado = document.getElementById("resultado");
let dobro;

btn.addEventListener("click", function(){
    valor = prompt("Insira o número.");
    dobro = valor * 2
    resultado.innerHTML = "<p>" + dobro + "</p>";
})