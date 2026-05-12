const ciudad = ["Maracay", "Caracas", "La Guaira", "San Juan", "Valencia"]; //Arrays
   // console.log(ciudad[0]);
    //console.log(ciudad[4]);
    //console.log(ciudad[3]);
   // console.log(ciudad);

// para (declao o inicializo la variable; condicion ; i++ incrementar de 1 en 1)
for (let i = 0; i < ciudad.length; i++) {
    console.log(`La ciudad mas bonita del pais es ${ciudad[i]}`) + "</br>";
    //conjunto de instrucciones que se debe ejecutar
}

const games = ["Counter Strike 2", "Mega Mix+", "Slay The Spire 2", "HELLDIVERS 2", "Satisfactory"]

for (let g = 0; g < games.length; g++) {
    console.log(`El Juego del Año es para ${games[g]}`) + "</br>";
}
for(let n=0;n<=100;n++){
    console.log(n);
}
let base = 4;
    console.log(`Tabla del ${base}`);
for(let x=0; x<=10; x++){
    console.log(`El resultado ${base} por ${x} es igual a ${base*x}`);
}
