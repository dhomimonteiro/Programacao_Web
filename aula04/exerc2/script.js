const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const paragrafo1 = document.getElementById("p1");
const paragrafo2 = document.getElementById("p2");
const paragrafo3 = document.getElementById("p3");
const paragrafo4 = document.getElementById("p4");
const titulo = document.getElementById("titulo");
let tipoDe = document.getElementById("typeof");

function reenterData(){
    valor = prompt("Digite algo: ");
}

titulo.addEventListener("click", reenterData)

btn1.addEventListener("click", function(){
    paragrafo1.textContent = valor;
})


btn2.addEventListener("click", function(){
    paragrafo2.textContent = valor;
    paragrafo3.textContent = valor;
    paragrafo4.textContent = valor;
})

btn3.addEventListener("click", function(){
    //criar uma array com todos os paragrafos
    const paragrafos = [paragrafo1, paragrafo2, paragrafo3, paragrafo4];
    //escolhe um número aleatório até o máximo de números na array
    const random = Math.floor(Math.random() * paragrafos.length);
    //console.log(paragrafos[random]);
    paragrafos[random].textContent = "";
})

btn4.addEventListener("click", function(){
    alert(valor);
})

btn5.addEventListener("click", reenterData);

btn6.addEventListener("click", function(){

    tipoDe.innerHTML = "<p> Entrada:" + valor + " <br> Largura da entrada: " + valor.length + "</p>"
})