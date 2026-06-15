//Comprender cómo los métodos internos de un objeto pueden modificar sus propias propiedades usando la palabra clave this.
//Estructura de Datos: Crea un objeto literal llamado mascota que represente a un gato tuxedo llamado "Gatzu".

const gatzu = {
    nombre: "Gatzu",
    energia: 100,
    hambre: 0,
    
    jugar() {
        let energia = this.energia;
        let hambre = this.hambre;
        energia -= 20;
        hambre += 15;
        localStorage.setItem(energia, energia -= 20)
    },
    comer() {
        let hambre = this.hambre;
        if (hambre=0) {
        hambre=0
        } if(hambre>0) {
        hambre-30
        }
    },
    dormir() {
        let hambre = this.hambre
        let energia = this.energia
        energia=100
        hambre+10
    },
    estado() {
        
    }
};


localStorage.setItem("gatzu", JSON.stringify(gatzu));
var gatstorage = JSON.parse(localStorage.getItem(gatzu))

const jugar = gatzu.jugar();
const comer = gatzu.comer();
const dormir = gatzu.dormir();
const estado = gatzu.estado();



