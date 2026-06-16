//Comprender cómo los métodos internos de un objeto pueden modificar sus propias propiedades usando la palabra clave this.
//Estructura de Datos: Crea un objeto literal llamado mascota que represente a un gato tuxedo llamado "Gatzu".

var gatzu = {
    nombre: "Gatzu",
    energia: 100,
    hambre: 0,
};
localStorage.setItem("gatzu", JSON.stringify(gatzu));

var gatzuS = JSON.parse(localStorage.getItem("gatzu"));

function gatzujugar(play) {
    if (localStorage.getItem(gatzuS.energia) == 0) {
        console.log(`Gatzu no tiene energia para jugar`);
    } else {
        localStorage.getItem(gatzuS.energia) >=20
        localStorage.setItem(gatzuS.energia, gatzuS.energia-=20)
    }
}

function gatzucomer(eat) {
    let hambreASubs = 30
    if (localStorage.getItem(gatzuS.hambre) ==0) {
        console.log(`Gatzu no tiene hambre`);
    } else {
        localStorage.getItem(gatzuS.hambre)
    }
}

console.log(gatzuS);



