const curso = {
    nombre: "programacion", //llave o propiedad a la cual se le asigna un valor
    duracion: "40 horas", //cada llave de ir separada por coma y el valor
    //asignado con dos puntos
    disponible: true,
    informacion: {
        modulos: 15,
        modalidad: {
            presencial: true,
            online: false,
        },
    },
};

//console.log(curso);
//console.log(curso.duracion); 
//console.log(curso.informacion.modalidad.online);


//desestructuracion de objetos - descomposicion de objetos

//const {duracion, disponible, informacion, informacion:{modulos, modalidad, modalidad:{presencial, online}}}=curso;
//console.log(disponible);
//console.log(modulos)
//console.log(`La modalidad es presencial (${presencial})`);


const telefono = {
    marca: "Samsung",
    modelo: "Galaxy S26 Ultra",
    pantalla: {
        dimensiones: 6.9,
        tipodepantalla: "LTPO AMOLED",
        resolucion: "1440x3120",
    },
    camara:{
        selfie: 12,
        main: 50,
    },
    procesador: {
        marcapro: "Qualcomm",
        modelopro: "Snapdragon 8 Elite Gen 5",
        gigapro: 4.74
    },
    almacenamiento: "1TB",
    memoria: 16,
    bateria: {
        velocidad: 60,
        cantidad:{
            horas: 10,
            miliamperios: 5000,
        }
    },
    conectividad:{
        cincog: true,
        sim: true,
        esim: true,
    }
}
const {marca, modelo, pantalla, pantalla:{dimensiones, tipodepantalla, resolucion}, camara, camara:{selfie, main}, procesador, procesador:{marcapro, modelopro, gigapro}, almacenamiento, memoria, bateria, bateria:{velocidad, cantidad, cantidad:{horas, miliamperios}}, conectividad:{cincog, sim, esim}}=telefono

console.log(`La marca del telefono es ${marca}`);
console.log(`El modelo del telefono es ${modelo}`);
console.log(pantalla);
console.log(`Las dimensiones de su pantalla son ${dimensiones} pulgadas`);
console.log(`El tipo de pantalla es ${tipodepantalla}`);
console.log(`La resolucion de pantalla es ${resolucion}`);
console.log(camara);
console.log(`Megapixeles de la camara selfie: ${selfie}`);
console.log(`Megapixeles de la camara principal: ${main}`);
console.log(procesador);
console.log(`La marca del procesador es ${marcapro}`);
console.log(`El modelo del procesador es ${modelopro}`);
console.log(`Los GigaHertz del procesador son ${gigapro}`);
console.log(`La cantidad de almacenamiento es de ${almacenamiento}`);
console.log(`La cantidad de memoria RAM es de ${memoria}GB`);
console.log(bateria);
console.log(`La velocidad de carga es de ${velocidad}W`);
console.log(cantidad);
console.log(`La duracion de la bateria es de ${horas} horas con la pantalla encendida`);
console.log(`La bateria tiene una cantidad de ${miliamperios} miliamperios`);
console.log(`Tiene 5G? = ${cincog}`);
console.log(`Soporta SIM? = ${sim}`);
console.log(`Soporta eSIM? = ${esim}`);
