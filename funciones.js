/**
 * Created by Miguel on 25/02/2017.
 */

var num, buffer=0, op="";

function inic() {
    num = document.getElementById("in");
}

function reset() {
    num.value = "";
}

function suma() {
    buffer = num.value;
    op = "+";
}

function resta() {
    buffer = num.value;
    op = "-";
}

function multiplica() {
    buffer = num.value;
    op = "*";
}

function divide() {
    buffer = num.value;
    op = "/";
}

function potencia() {
    buffer = num.value;
    op = "pot";
}

function calcular() {
    if( op === "+") {
        num.value = +buffer + +num.value;
    }
    else if( op === "-") {
        num.value = +buffer - +num.value;
    }
    else if( op === "*") {
        num.value = +buffer * +num.value;
    }
    else if( op === "/") {
        num.value = +buffer / +num.value;
    }
    else if( op === "pot") {
        num.value = Math.pow(+buffer,+num.value);
    }
    else {
        alert("ERROR, pruebe de nuevo");
    }
}

function cuadrado() {
    num.value *= num.value;
}

function inverso() {
    num.value = 1/num.value;
}

function raiz() {
    num.value = Math.sqrt(num.value);
}

function parteEntera() {
    if( num.value >0 ) {
        num.value = Math.floor(num.value);
    }
    else {
        num.value = -Math.ceil(num.value);
    }
}
