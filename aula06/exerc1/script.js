const btnAlerta = document.getElementById("btnAlerta");
const btnFlip = document.getElementById("btnFlip");
const btnPararFlip = document.getElementById("btnPararFlip");
const btnLimpar = document.getElementById("btnLimpar");
const nomeInput = document.getElementById("nome");
const sobrenomeInput = document.getElementById("sobrenome");
let nome;
let sobrenome;

btnAlerta.addEventListener("click", function(){
    nome = document.getElementById("nome").value;
    sobrenome = document.getElementById("sobrenome").value;
    alert(nome + " " + sobrenome);
    console.log(nome, sobrenome);
})

function intervaloDeFlip(){
    const flip = setInterval(function() {
        nome = document.getElementById("nome").value;
        sobrenome = document.getElementById("sobrenome").value;
        
        if (nomeInput.value == nome) {
            nomeInput.value = sobrenome;
            sobrenomeInput.value = nome;
        }else{
            nomeInput.value = nome;
            sobrenomeInput.value = sobrenome;
        }
        btnPararFlip.addEventListener("click", function() {
            clearInterval(flip);
        })
    } ,2000);
}

btnFlip.addEventListener("click", intervaloDeFlip)

btnLimpar.addEventListener("click", function(){
    nome = "";
    sobrenome = "";
    nomeInput.value = "";
    sobrenomeInput.value = "";
})