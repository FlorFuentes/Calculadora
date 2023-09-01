//Variables de numeros seleccionadas por ID
const num0 = document.getElementById("cero");
const num1 = document.getElementById("uno");
const num2 = document.getElementById("dos");
const num3 = document.getElementById("tres");
const num4 = document.getElementById("cuatro");
const num5 = document.getElementById("cinco");
const num6 = document.getElementById("seis");
const num7 = document.getElementById("siete");
const num8 = document.getElementById("ocho");
const num9 = document.getElementById("nueve");

//Variables de operadores seleccionadas por ID
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multiplicacion = document.getElementById("multiplicacion");
const division = document.getElementById("division");
const reset = document.getElementById("reset");
const igual = document.getElementById("igual");
const resultado = document.getElementById("resultado");

//Variables para las funciones de los operadores(+,-,*,/). Cuando el usuario hace click en, x ej nº1, se guarde en la variable operadorA y cuando presione +(suma)se guarde en operador y el siguiente numero que presione va a ser operadorB.
let operadorA = "";
let operadorB = "";
let operador = "";


//Funciones para los eventos de los botones numericos. 
//Con el onclik cuando el usuario preciona en el casillero de resultado se va a visualizar el contenido

num0.onclick = function (e) {
    resultado.textContent = resultado.textContent + "0"; //establecemos un contenido al componente
}
num1.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1";
}
num2.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2";
}
num3.onclick = function (e) {
    resultado.textContent = resultado.textContent + "3";
}
num4.onclick = function (e) {
    resultado.textContent = resultado.textContent + "4";
}
num5.onclick = function (e) {
    resultado.textContent = resultado.textContent + "5";
}
num6.onclick = function (e) {
    resultado.textContent = resultado.textContent + "6";
}
num7.onclick = function (e) {
    resultado.textContent = resultado.textContent + "7";
}
num8.onclick = function (e) {
    resultado.textContent = resultado.textContent + "8";
}
num9.onclick = function (e) {
    resultado.textContent = resultado.textContent + "9";
}


//Funciones para los eventos de los operadores(+,-,*,/,C)
reset.onclick = function (e) {
    resetear();
}

suma.onclick = function (e) {
    operadorA = resultado.textContent;
    operador = "+";
    limpiar(); //Llamamos a la funcion para limpiar la pantalla
}

resta.onclick = function (e) {
    operadorA = resultado.textContent;
    operador = "-";
    limpiar();
}
multiplicacion.onclick = function (e) {
    operadorA = resultado.textContent;
    operador = "*";
    limpiar();
}
division.onclick = function (e) {
    operadorA = resultado.textContent;
    operador = "/";
    limpiar();
}

igual.onclick = function (e) {
    operadorB = resultado.textContent;
    resolver();
}


//Limpiar:borra cualquier contenido que este en el panel de resultado
function limpiar() {
    resultado.textContent = "";
}

//Resetear: limpia el panel de resultados,pero tambien inicializa a "0" el operadorA y operadorB y la variable de operador.
function resetear() {
    resultado.textContent = "";
    operadorA = 0;
    operadorA = 0;
    operador = "";
}

//Resolver: mediante un switch valida la variable operador, si es una suma,suma operadorA + operadorB...y asi sucesivamente
function resolver() {
    let res = 0;
    switch (operador) {
        case "+":
            res = parseFloat(operadorA) + parseFloat(operadorB)
            break;
        case "-":
            res = parseFloat(operadorA) - parseFloat(operadorB)
            break;
        case "*":
            res = parseFloat(operadorA) * parseFloat(operadorB)
            break;
        case "/":
            res = parseFloat(operadorA) / parseFloat(operadorB)
            break;
    }
    resetear();//llamamos a la funcion para resetear los valores de las variables operandoA,operandoB y operando, a 0
    resultado.textContent = res;
}