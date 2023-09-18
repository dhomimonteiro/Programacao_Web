const btn = document.getElementById("enviar");
const resultado = document.getElementById("resultado");
const primeiroValor = document.getElementById("primeiroValor");
const segundoValor = document.getElementById("segundoValor");
const terceiroValor = document.getElementById("terceiroValor");
let valor1;
let valor2;
let valor3;
let soma;

btn.addEventListener("click", function(){
    valor1 = parseFloat(prompt("Insira o primeiro número."));
    valor2 = parseFloat(prompt("Insira o segundo número."));
    valor3 = parseFloat(prompt("Insira o terceiro número."));

    soma = valor1 + valor2 + valor3

    resultado.innerHTML = "<p>" + soma + "</p>";
    primeiroValor.innerHTML = "<p>" + valor1 + "</p>";
    segundoValor.innerHTML = "<p>" + valor2 + "</p>";
    terceiroValor.innerHTML = "<p>" + valor3 + "</p>";
})