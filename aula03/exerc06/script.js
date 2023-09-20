const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");
let base;
let altura;
let total;

botao.addEventListener("click", function(){
    base = prompt("Informe a base do triângulo.");
    altura = prompt("Informe a altura do triângulo");

    total = (base * altura) / 2;
    resultado.innerHTML = "<p>" + total + "</p>";
})
