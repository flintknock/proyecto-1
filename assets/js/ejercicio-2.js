let encender="";
let acelerar="";
let retroceder="";
let girarIzq="";
let girarDer="";
let chocar="";

const vehiculo ={
    encender: function(id) {
        console.log(`Esta encendido el vehiculo? = ${id}`);
        encender+="Esta encendido el vehiculo? = " + id;
        document.getElementById("encender").innerHTML =encender;
    },
    acelerar: function(id) {
        console.log(`Esta acelerando el vehiculo? = ${id}`);
        acelerar+="Esta acelerando el vehiculo? = " + id;
        document.getElementById("acelerar").innerHTML =acelerar;
    },
    retroceder: function(id) {
        console.log(`Esta retrocediendo el vehiculo? = ${id}`);
        retroceder+="Esta retrocediendo el vehiculo? = " + id;
        document.getElementById("retroceder").innerHTML = retroceder
    },
    girarIzq: function(id) {
        console.log(`Esta girando el vehiculo hacia la Izquierda? = ${id}`);
        girarIzq+="Esta girando el vehiculo hacia la Izquierda? = " + id;
        document.getElementById("girarIzq").innerHTML = girarIzq;
    },
    girarDer: function(id) {
        console.log(`Esta girando el vehiculo hacia la Derecha? = ${id}`);
        girarDer+="Esta girando el vehiculo hacia la Derecha? = " + id;
        document.getElementById("girarDer").innerHTML = girarDer;
    },
    chocar: function(id) {
        console.log(`Esta chocado el vehiculo? = ${id}`);
        chocar+="Esta chocado el vehiculo? = " + id;
        document.getElementById("chocar").innerHTML = chocar;
    },
};

vehiculo.encender(true)
vehiculo.acelerar(true)
vehiculo.retroceder(false)
vehiculo.girarIzq(false)
vehiculo.girarDer(true)
vehiculo.chocar(true)