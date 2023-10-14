const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const resultado = document.getElementById("resultado");
const situacao = document.getElementById("situacao");
let nota1 = "", nota2 = "", nota3 = "", media = "", valor = "", situacaoResultado = "";

function callPrompt(){
    valor = prompt("Insira sua nota: ");
    return valor;
}

function calcGrade() {
    media = (nota1 + nota2 + nota3)/3;
    return media;
    
}

function validateValue(valor) {
    //Validar a entrada para não ser null, uma string vazia ou texto não numérico
    if (valor == null || valor == "" || isNaN(valor)) {
        alert("Entrada deve ser numérica");
        return false;
    }else{
        //Valida a entrada para notas válidas (entra 0 e 10);
        if (valor < 0 || valor > 10) {
            alert("Nota deve estar entre 0 e 10.");
            return false;
        }else{
            return true;
        }
    }
}

btn1.addEventListener("click", function(){
    valor = callPrompt();
    if (validateValue(valor)) {
        nota1 = parseFloat(valor);
    }
})

btn2.addEventListener("click", function(){
    valor = callPrompt();
    if (validateValue(valor)) {
        nota2 = parseFloat(valor);
    }
})

btn3.addEventListener("click", function(){
    valor = callPrompt();
    if (validateValue(valor)) {
        nota3 = parseFloat(valor);
        if (nota1 != "" && nota2 != "" && nota3 != "") {
            media = calcGrade();
            if (media >= 6) {
                situacaoResultado = "APROVADO";
                resultado.style.color = "green";
                situacao.style.color = "green";
            }else if(media < 3){
                situacaoResultado = "REPROVADO";
                resultado.style.color = "red";
                situacao.style.color = "red";
            }else {
                situacaoResultado = "EM EXAME";
                resultado.style.color = "orange";
                situacao.style.color = "orange";
            }
            resultado.textContent = media.toFixed(2);
            situacao.textContent = situacaoResultado;
        }        
    }
})