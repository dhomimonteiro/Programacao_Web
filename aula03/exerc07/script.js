const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");
let nome;
let anoNasc;
let anoAtual;
let idade;

botao.addEventListener("click", function(){
    //Limpar o dado já inserido, se existir.
    resultado.innerHTML = "";
    nome = prompt("Insira seu nome.");
    anoNasc = prompt("Insira seu ano de nascimento.");
    anoAtual = prompt("Insira o ano atual.");

    idade = anoAtual - anoNasc;

    //Cria uma nova tag p chamada p
    let p = document.createElement("p");
    //Atribui texto e uma tag <br> a ela com innerHTML
    p.innerHTML = "Olá, " + nome + "! <br> Sua idade é de " + idade + " anos."
    //Insere os elementos p dentro da div resultado
    resultado.appendChild(p); 
    
})