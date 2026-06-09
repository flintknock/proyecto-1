"use strict";

localStorage.setItem("info", "Informacion de VideoJuegos");
console.log(localStorage.getItem("info"));
document.querySelector("#infor").innerHTML = localStorage.getItem("info");

var games = {
    juego: "Forza Horizon 6",
    genero: "Carreras",
    plataforma: "Xbox, PS5, PC",
    espacio: "160GB",
};
localStorage.setItem("games", JSON.stringify(games));

var gamesjs = JSON.parse(localStorage.getItem("games"))
console.log(gamesjs);

document
    .querySelector("#juego")
    .append("Nombre del Juego: " + gamesjs.juego)
document
    .querySelector("#genero")
    .append("Genero del VideoJuego: " + gamesjs.genero)
document
    .querySelector("#plataforma")
    .append("Plataformas disponibles: " + gamesjs.plataforma)
document
    .querySelector("#espacio")
    .append("Espacio Minimo de Almacenamiento: " + gamesjs.espacio)

var games2 = {
    juego: "Call of Duty",
    genero: "Disparos",
    plataforma: "Xbox, PS5, Nintendo Switch 2, PC",
    espacio: "190GB",
};
localStorage.setItem("games2", JSON.stringify(games2));

var games2js = JSON.parse(localStorage.getItem("games2"));
console.log(games2js);

document
    .querySelector("#juego2")
    .append("Nombre del Juego: " + games2js.juego)
document
    .querySelector("#genero2")
    .append("Genero del VideoJuego: " + games2js.genero)
document
    .querySelector("#plataforma2")
    .append("Plataformas disponibles: " + games2js.plataforma)
document
    .querySelector("#espacio2")
    .append("Espacio Minimo de Almacenamiento: " + games2js.espacio)
    
    

