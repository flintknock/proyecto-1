"use strict";
/* FUNCIONES DE DECLARACION */
suma(20,80);
function suma (a, b){
    console.log(`La suma de ${a} + ${b} es igual a ${a + b}`);
}


/* FUNCIONES DE EXPRESION */

const suma2 = function (c, d){
    console.log(`La suma de ${c} + ${d} es igual a ${c + d}`);
}
suma2(55,40);

//diferencia entre un metodo - funcion
let n1 = 20;
let n2 = 15;
let n3 = "520";

console.log(parseInt(n1)); //esto es una funcion porque coloco el nombre de la funcion
//acompañada de ()= nombreFunction() antes de la variable;
console.log(n1.toString()); //esto es un metodo que va despues de una variable -- convierte un numero en un string
console.log(parseInt(n3)); //esto es un metodo que me convierte un string en numeros

//INCREMENTADORES EN JAVA SCRIPT
var b = 15;
var c = "15";
console.log(`Incrementa en 1 ${b++}`);
console.log(`Incrementa en 1 ${b++}`);
console.log(`Incrementa en 1 ${b++}`);

console.log(++b); /* Incrementa de 2 en 2 */
console.log(`Decrementa en 1 ${--b}`); /*Decrementa*/
/*Operadores estrictos de comparacion*/
var compruebo = b !== c; //valido que sean distintos tanto en valor como en tipo de datos
var compruebo2 = b === c; //comprobar que dps variables tengan tanto el mismo valor como que sean del mismo tipo de datos

console.log(compruebo); //true
console.log(compruebo2); //false