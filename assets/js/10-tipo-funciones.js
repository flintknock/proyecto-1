"use strict";
/* FUNCIONES DE DECLARACION */

function suma (a, b){
    console.log(`La suma de ${a} + ${b} es igual a ${a + b}`);
}
suma(20,80);

/* FUNCIONES DE EXPRESION */

const suma2 = function (c, d){
    console.log(`La suma de ${c} + ${d} es igual a ${c + d}`);
}
suma2(55,40);
