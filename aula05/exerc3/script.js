const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const resultado = document.getElementById("resultado");
let valor;
let valor1;
let isValue1 = false;
let valor2;
let isValue2 = false;
let maior;


function callPrompt() {
    valor = prompt("Informe um número");
    return valor;
}
function checkBiggerNum() {
    if (valor1 == valor2) {
        resultado.innerHTML = "<p>Os números são iguais</p>";
    } else if (valor1 > valor2) {
        resultado.innerHTML = "<p>O número " + valor1 + " é maior que o número " + valor2 + ".</p>";
    } else {
        resultado.innerHTML = "<p>O número " + valor2 + " é maior que o número " + valor1 + ".</p>";
    }
}
function isNumeral(value) {
    let isNumeral = false;
    if (!isNaN(value) && value != "" && value != null) {
        isNumeral = true;
        return true;
    } else {
        return false;
    }
}

btn1.addEventListener("click", function () {
    valor1 = callPrompt();
    if (isNumeral(valor1) == true) {
        valor1 = parseFloat(valor1);
        isValue1 = true;
        maior = valor1;
        console.log(typeof (valor1))
        if (isValue1 == true && isValue2 == true) {
            checkBiggerNum();
        }
    }else{
        alert("Entrada não é um número.")
    }
})

btn2.addEventListener("click", function () {
    valor2 = callPrompt();
    if (isNumeral(valor2) == true) {
        valor2 = parseFloat(valor2);
        isValue2 = true;
        console.log(valor2)
        if (isValue1 == true && isValue2 == true) {
            checkBiggerNum();
        }

    }else{
        alert("Entrada não é um número.")
    }
})

