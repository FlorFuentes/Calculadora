const numeros = document.querySelectorAll(".numero");
const operadores = document.querySelectorAll(".operador");
const resultado = document.getElementById("resultado");

let operandoA = "";
let operandoB = "";
let operador = "";

numeros.forEach(numero => {
    numero.addEventListener("click", (e) => {
        resultado.textContent += e.target.textContent;
    });
});

operadores.forEach(operadorBtn => {
    operadorBtn.addEventListener("click", (e) => {
        if (operandoA === "") {
            operandoA = resultado.textContent;
            operador = e.target.textContent;
            limpiar();
        } else {
            operandoB = resultado.textContent;
            limpiar();
            resolver();
            operandoA = resultado.textContent;
            operador = e.target.textContent;
            //limpiar();
        }
    });
});

document.getElementById("reset").addEventListener("click", () => {
    resetear();
});

document.getElementById("igual").addEventListener("click", () => {
    if (operandoA !== "" && operandoB !== "" && operador !== "") {
        resolver();
        resultado.textContent = operandoA; // Muestra el resultado en operandoA
        operandoB = ""; // Restablece operandoB
        operador = "";  // Restablece el operador
    }
});

function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    operandoA = "";
    operandoB = "";
    operador = "";
}

function resolver() {

    
    let res = 0;
    switch (operador) {
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB);
            break;
        case "-":
            res = parseFloat(operandoA) - parseFloat(operandoB);
            break;
        case "*":
            res = parseFloat(operandoA) * parseFloat(operandoB);
            break;
        case "/":
            if (parseFloat(operandoB) === 0) {
                res = "Error";
            } else {
                res = parseFloat(operandoA) / parseFloat(operandoB);
            }
            break;
    }
    resetear();
    resultado.textContent=res;
}
 