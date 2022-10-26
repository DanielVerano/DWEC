// Crea un programa que muestre el número de días que quedan desde hoy hasta el fin de curso (por ejemplo, el 24 de junio).

// const argumentos = process.argv.slice(2);
/**
 * * Función que devuelve la diferencia entre la fecha actual y la del 24 de Junio de 2023 en días.
 * @returns 
 */
function diasHastaFinDeCurso() {
    console.info('Entrando en el método diasHastaFinDeCurso');
    // Definimos una constante para indicar el último día de curso, el 24 de Junio de 2023 (recordar que los meses empiezan desde 0)
    const finDeCurso = new Date(2023, 5, 24);

    // Definimos otra variable para guardar la fecha actual
    let fechaActual = new Date();

    // Calculamos la diferencia entre las dos fechas con el método getTime(), que nos la devuelve en milisegundos
    let diff = finDeCurso.getTime() - fechaActual.getTime();

    // Pasamos los milisegundos a días y redondeamos el resultado
    diff = Math.round(diff / 1000 / 60 / 60 / 24);

    // Por último, devolvemos el resultado
    console.info('Saliendo del método diasHastaFinDeCurso');
    return diff;
}

console.log(`Quedan ${diasHastaFinDeCurso()} días entre la fecha actual y el 24 de Junio de 2023`);