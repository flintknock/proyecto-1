 "use strict";

 if (typeof Storage !== "undefined") {
    //Significa "es diferente de indefinido."
    console.log("LocalStorage esta disponible");
 } else {
    console.log("LocalStorage no esta disponible");
 }

 //Guardar Datos
 localStorage.setItem("titulo", "Curso de PHP");

 //Obtener un elemento de local Storage
 localStorage.getItem("titulo");

 //Imprimir en consola de lo que obtuve del local storage
 console.log(localStorage.getItem("titulo"));

 //Para imprimir en HTML lo que almacene del local storage
 document.querySelector("#curso").innerHTML = localStorage.getItem("titulo");

 //Guardar objetos json
 var user = {
    nombre: "Marco Blones",
    email: "marcoblones25@gmail.com",
    web: "google.com"
 };
 localStorage.setItem("user", JSON.stringify(user));

 /*La forma corecta de almacenar datos en LocalStorage es conviertiendo los objetos 
 en json-string porque no procesa el objeto con JavaScript puro. 
 La forma correcta de enviar infomacion a un API se debe hacer igual con json-string. */

 //Recuperar objetos de Local Storage


 var userjs = JSON.parse(localStorage.getItem("user"));
 console.log(userjs); //compruebo que los estoy capturando

 //Ahora para imprimir en el HTML
 document
    .querySelector("#alumno")
    .append(" " + userjs.nombre + " " + userjs.email)

//Vaciar el local storage
//localStorage.removeItem("user")
//localStorage.clearItem("user")