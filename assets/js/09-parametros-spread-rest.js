function listadoFrutas(fruta1, fruta2, ...todasfrutas){
    console.log(`La fruta 1 es`, fruta1);
    console.log(`La fruta 2 es`, fruta2);
    console.log(todasfrutas);
}

//PARAMETROS REST
listadoFrutas("fresa", "cambur", "patilla", "durazno", "melon", "guayaba")

function marcasCarros(marca1, marca2, marca3, ...todasmarcas){
    console.log(`La primera marca de Carros es`, marca1);
    console.log(`La segunda marca de Carros es`, marca2);
    console.log(`La tercera marca de Carros es`, marca3);
    console.log(todasmarcas);
}
marcasCarros("Nissan", "Toyota", "Ford", "Chevrolet", "Mazda", "Chery");

let marcasTlf = ["Apple", "Samsung", "Huawei"]; //ARRAY
//parametros SPREAD //convierto un arreglo en un parametro
marcasCarros(...marcasTlf, "Ford", "Chevrolet", "Mazda", "Chery");