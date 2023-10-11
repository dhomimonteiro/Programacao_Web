const btn = document.getElementById("btnSend");
const resultado = document.getElementById("resultado");
let juros;

function checarJuros(quantParcelas){
    if (quantParcelas >= 4) {
        juros = 7;       
    }
    else if (quantParcelas >= 2) {
        juros = 3;
    }else{
        juros = 0;
    }
}

btn.addEventListener("click", function(){
    let total = parseFloat(prompt("Insira o total."));
    let quantParcelas = prompt("Insira a quantidade de parcelas");
    checarJuros(quantParcelas);
    total = total + (total * (juros / 100));
    let totalParcela = total / quantParcelas;
    resultado.innerHTML = "Com juros de " + juros + "%, o valor total é R$" + total + ", pagando R$" + totalParcela.toFixed(2) + " por parcela.";
})