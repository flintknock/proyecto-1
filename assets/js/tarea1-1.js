
const NotaMinima = 10;

const expedienteAcademico = {
    estudiante1: {
        nombre: "Miguel",
        carrera: "Diseño Grafico",
        calificaciones: [14, 18, 10, 9, 20]
    },
    obtenerPromedio() {
        const notas = this.estudiante1.calificaciones
        const sumaCalificaciones = notas.reduce((acc, val) => acc + val, 0);
        return sumaCalificaciones / notas.length;
    },
    estaAprobado() {
      return this.obtenerPromedio() >= NotaMinima;
    },
}

const promedio = expedienteAcademico.obtenerPromedio();
const aprobado = expedienteAcademico.estaAprobado();

console.log(promedio);
console.log(aprobado);



