const inputUser = document.getElementById("numeroUser");
const tabela = document.getElementById("tabela");
let corpoTabela = document.getElementById("corpoTabela");
const btnEnviar = document.getElementById("btnEnviar");

function limpar() {
    var rowCount = tabela.rows.length;
    for (let i = 1; i < rowCount; i++) {
        tabela.deleteRow(1);
    }
}

function criarLinha(value) {
    let i = 0
    while (i < value) {
        let linhaTabela = document.createElement("tr");
        let datetime = new Date();
        let milisec = datetime.getMilliseconds();
        let randomNum = Math.random().toFixed(5)

        linhaTabela.innerHTML = "<td>" +
            milisec +
            "</td>" +
            "<td>" +
            randomNum +
            "</td>";
        corpoTabela.appendChild(linhaTabela);
        i++;
    }
}

btnEnviar.addEventListener("click", function () {
    limpar();
    let numeroUser = document.getElementById("numeroUser").value;
    criarLinha(numeroUser);
    btnEnviar.disabled = true;
    btnEnviar.textContent = "Tabela Criada";
})

inputUser.addEventListener("focus", function() {
    btnEnviar.disabled = false;
    btnEnviar.textContent = "Iniciar a criação";
});