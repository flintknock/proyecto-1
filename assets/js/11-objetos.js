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

console.log(curso);
console.log(curso.duracion); 
console.log(curso.informacion.modalidad.online);


//desestructuracion de objetos - descomposicion de objetos

const {duracion, disponible, informacion, informacion:{modalidad, modalidad:{presencial, online}}}=curso;
console.log(disponible);
console.log(`La modalidad es presencial (${presencial})`);