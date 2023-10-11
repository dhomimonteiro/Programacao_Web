const btn = document.getElementById("btnSend");
const lista = document.getElementById("lista");
let numero;

btn.addEventListener("click", function () {
    numero = prompt("Insira um número.");

    try {
        if (numero === "" || numero == null) {
            throw "vazia.";
        } else if (!isNaN(numero)){
            numero = parseInt(numero);
            if (numero % 2 == 0) {
                alert("O número " + numero + " é par.")
            } else {
                alert("O número " + numero + " é ímpar.")
            }
            let li = document.createElement("li");
            li.innerHTML = numero;
            lista.appendChild(li);
        } else {
            throw "não é um número.";
        }
    } catch (error) {
        alert("Entrada " + error);
    }
})