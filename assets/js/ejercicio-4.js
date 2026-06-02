"use strict";
//EJERCICIO 1
//Una torilla de patatas lleva 200 gramos de patatas por persona
//Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla
//Escribe un script que dado el numero de comensales calcula las cantidades de ingradientes necesarias

let tortilla=200; //g de patatas
let huevos=1;
let cebolla=60; //g 

let persona=5
console.log(`si hay ${persona} comensales en el rest entonces ${tortilla*persona} g de patatas mas ${huevos*persona} huevos mas ${cebolla*persona} g de cebolla`);


//EJERCICIO 2
//ELABORA UN PROGRAMA QUE LE SOLICITE AL USUARIO LA CANTIDAD DE HORAS TRABAJADAS Y SU TRAFIA POR HORA
//COMO RESULTADO DEBE MOSTRAR EL SALARIO TOTAL DEL TRABAJOR

//(eliminar "//" cuando se use)
//var horasT = parseInt(prompt("Introduce tu numero de horas trabajadas.", 0))
//var tarifa = parseInt(prompt("Introduce tu tarifa por hora.", 0))
//console.log(`Segun la cantidad de ${horasT} horas trabajadas y la tarifa de ${tarifa}, el salario de esa jornada es de ${horasT*tarifa}$`);


//EJERCICIO 3
//ESCRIBE UN SCRIPT QUE PIDA AL USUARIO EL PRECIO ORIGINAL DE UN PRODUCTO
//+ PORCENTAJE DE DESCUENTO
//DEBE MOSTRAR EL MONTO A DESCONTAR
//DEBE MOSTRAR EL PRECIO TOTAL MENOS EL DESCUENTO

//var precioProduc = parseInt(prompt("Introduzca el precio original del producto:", 0))
//var percnt = parseInt(prompt("Introduzca el porcentaje de descuento:", 0))

//let descuento = percnt/100
//let montoDesc = precioProduc*descuento

//console.log(`El monto original del producto es de $${precioProduc}.`);
//console.log(`El monto a descontar es de ${montoDesc}.`);
//console.log(`Siendo el monto total a pagar de ${precioProduc-montoDesc}`);

//EJERCICIO 5
//ESCRIBE UN SCRIPT QUE ME CALCULE EN SEGUNDOS EL TIEMPO QUE DURA UNA PERSONA USANDO EL SISTEMA
var horas = parseInt(prompt("Introduzca la cantidad de horas usadas:", 0))
var minutos = parseInt(prompt("Introduzca la cantidad de minutos usados:", 0))
var seg = parseInt(prompt("Introduzca la cantidad de segundos usados:", 0))

let seg1 = horas*3600
let seg2 = minutos*60
console.log(`Usted ha pasado ${seg1+seg2+seg} segundos en el sistema`);


