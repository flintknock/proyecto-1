// Metodos en Objetos
// Un metodo es una funcion dentro de una propiedad de un objeto

let reproducir="";
let mostrar="";
let pausar="";
let borrar="";
let crearPlay="";
let reproducirPlay="";

const reproductor ={
    reproducir: function(id) {
        console.log(`Reproduciendo la canción ${id}`);
        reproducir+="Reproduciendo la canción " + id;
        document.getElementById("reproducir").innerHTML =reproducir;
    },
    mostrar: function(nombreCancion) {
        console.log(`La canción ${nombreCancion} fue agregada a la Playlist`);
        mostrar+="La canción " + nombreCancion + " fue agregada a la Playlist";
        document.getElementById("mostrar").innerHTML =mostrar;
    },
    pausar: function(id) {
        console.log(`pausando... la canción con el id ${id}`);
        pausar+="pausando... la canción con el id " + id;
        document.getElementById("pausar").innerHTML =pausar;
    },
    borrar: function(id) {
        console.log(`Borrando canción con id ${id}`);
        borrar+="Borrando canción con id " + id;
        document.getElementById("borrar").innerHTML =borrar;
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la Playlist ${nombre}`);
        crearPlay+="Creando la Playlist " + nombre;
        document.getElementById("crearPlay").innerHTML =crearPlay;
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la Playlist ${nombre}`);
        reproducirPlay+="Reproduciendo la Playlist " + nombre;
        document.getElementById("reproducirPlay").innerHTML =reproducirPlay;
    },
}

reproductor.reproducir("Mystery Train")
reproductor.mostrar("Mystery Train")
reproductor.pausar("Mystery Train")
reproductor.borrar(15)
reproductor.crearPlaylist("Rock and Roll");
reproductor.reproducirPlaylist("Rock and Roll");

