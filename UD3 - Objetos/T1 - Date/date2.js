//  Crea un programa que pida por parámetro tu cumpleaños (no hace falta el año) y saque todos los años en que tu cumpleaños va a caer en domingo desde este año hasta el año 2100.

console.info('Ejecutando script date2.js');

// let dia = +prompt('Introduce tu día de cumpleaños', 0);
// let mes = +prompt('Introduce tu mes de cumpleaños (en formato número)', 0);

let dia = +process.argv.slice(2)[0];
let mes = +process.argv.slice(2)[1];

if (!diaEsCorrecto(dia) || !mesEsCorrecto(mes)) {
    console.error('El formato de los datos introducidos no son correctos');
    return;
}

const anioFinal = 2100;
let diaActual;
let fechaCumpleanos = new Date();
const anioActual = fechaCumpleanos.getFullYear();
fechaCumpleanos.setMonth(mes - 1, dia);

for (let i = anioActual + 1; i <= anioFinal; i++) {
    fechaCumpleanos.setFullYear(i);
    diaActual = fechaCumpleanos.getDay();

    if (diaActual === 0) {
        console.log(`Tu cumpleaños caerá en domingo en el año ${fechaCumpleanos.getFullYear()}`);
    }
}

console.info('Saliendo del script date2.js');

/**
 * * Función que comprueba si un día que se le pasa por parámetro es un número y si está dentro de los valores 1 y 31.
 * @param {Number} dia 
 * @returns 
 */
function diaEsCorrecto(dia) {
    return dia !== null && dia > 0 && dia < 32 && !isNaN(dia);
}

/**
 * * Función que comprueba si un mes que se le pasa por parámetro es un número y si está dentro de los valores 1 y 12.
 * @param {Number} mes 
 * @returns 
 */
function mesEsCorrecto(mes) {
    return mes != null && mes > 0 && mes < 13 && !isNaN(mes);
}