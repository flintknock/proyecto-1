//Comprender cómo los métodos internos de un objeto pueden modificar sus propias propiedades usando la palabra clave this.
//Estructura de Datos: Crea un objeto literal llamado mascota que represente a un gato tuxedo llamado "Gatzu".
"use strict";
var gatzu = {
    nombre: "Gatzu",
    energia: 100,
    hambre: 0,
};
    localStorage.setItem("gatzu", JSON.stringify(gatzu));

var gatzujs = JSON.parse(localStorage.getItem("gatzu"));
console.log(gatzujs);

function gatzujugar() {
    let MinGatEne = Math.max(0, gatzujs.energia - 20)

    if (gatzujs.energia == 0) {
        console.log(`Gatzu no tiene energia para jugar`);
    } else if (gatzujs.energia >=1) {
        localStorage.setItem(gatzujs.energia, MinGatEne)
    }
}

function gatzucomer() {
    let hambreASubs = 30
    let HamVal = parseInt(localStorage.getItem(gatzuStorage.hambre))
    let hambreSG = Math.max(0, HamVal - hambreASubs)
    
    if (HamVal==0) {
        console.log(`Gatzu no tiene hambre`);
    } else if (HamVal>=1) {
        localStorage.setItem("hambre", hambreSG)
    }
}

function gatzudormir() {
    let energAct = parseInt(localStorage.getItem("energia")) 
}



console.log((gatzujs.energia));






console.log();




