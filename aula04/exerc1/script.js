const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");
const botao4 = document.getElementById("botao4");
const botao5 = document.getElementById("botao5");
const cl1 = document.getElementsByClassName("cl1");
const cl2 = document.getElementsByClassName("cl2");
const lista = document.getElementsByTagName("ul");
let valor;

function callPrompt(){
    valor = prompt("Insira uma entrada");
}

function calcArea(height, width){
    return width * (height/2);
}

botao1.addEventListener("click", callPrompt);

botao2.addEventListener("click", function(){
    cl1[0].textContent = valor;
    cl2[0].textContent = valor;
    setTimeout(() => {
        cl1[1].textContent = valor;
        cl2[1].textContent = valor;
    }, 3000);
})

botao3.addEventListener("click", () => alert(valor));

botao4.addEventListener("click", function(){
    callPrompt();
    i = lista.length -1;
    let li = document.createElement("li");
    li.innerHTML = "<em>" + valor + "</em>";
    lista[i].appendChild(li);
})

botao5.addEventListener("click", function(){
    let height = prompt("Insira a altura:")
    let width = prompt("Insira a largura:");
    let resultado = calcArea(height, width);
    cl1[0].textContent = "Área total: " + resultado;
})