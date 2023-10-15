const btnValue = document.getElementById("btnValue");
const btnCode = document.getElementById("btnCode");
let valor = "",
    code = "",
    total = "";

function callPrompt(){
    let value = prompt("Insira a entrada");
    return value;
}

function validateValue(valor) {
    if (valor == null || valor == "" || isNaN(valor)) {
        alert("Entrada deve ser numérica");
        return false;
    }else{
        return true;
    }
}

btnValue.addEventListener("click", function() {
    let value = callPrompt();
    if (validateValue(value)) {
        valor = parseFloat(value).toFixed(2);
    }
})

btnCode.addEventListener("click", function() {
    let value = callPrompt();
    if (validateValue(value)) {
        code = value;
        if (code == 1) {
            total = (valor * 0.9).toFixed(2);
            alert("O valor de R$" + valor + " ficará R$" + total);
        }else if (code == 2){
            total = (valor * 1.02).toFixed(2);
            alert("O valor de R$" + valor + " ficará R$" + total);
        }else if (code == 3) {
            total = (valor * 1.07).toFixed(2);
            alert("O valor de R$" + valor + " ficará R$" + total);
        }else {
            alert("Este código não é válido.");
        }
    }
    
})