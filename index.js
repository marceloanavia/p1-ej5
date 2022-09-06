"use strict";

/* TODO */
function ingresar(){
    do {
    numero = parseInt(prompt("ingresar número"));
    } while(isNaN(numero));
    return numero;
}

function mostrar(){
    alert(`el numero es ${numero}`);

    if (numero == 0){
        console.info("El número es 0");
    } else if ((numero % 2) == 0){
        console.info("El número es par");
    } else {
        console.info("El número es impar");
    }
}

var numero;
