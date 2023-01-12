// Crea un programa que muestre la fecha actual en diferentes formatos, según el valor que introduzca el usuario por parámetro:
// 15/10/2020
// Jueves, 15 de octubre de 2020.
// Thursday, October 15, 2020.

console.info('Ejecutando script date3.js');

let opcion = process.argv.slice(2)[0];

const fechaActual = new Date();
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

switch (opcion) {
    case '1':
        formatoEnBarras(fechaActual);
        break;
    case '2':
        console.log(fechaActual.toLocaleString('es-ES', options));
        break;
    case '3':
        console.log(fechaActual.toLocaleString('en-US', options));
        break;
    default:
        console.error('La opción introducida es incorrecta');
        break;
}

/**
 * * Función que saca por pantalla una fecha pasada por parámetro en este formato: dd/mm/yyyy
 * @param {Date} fecha 
 */
function formatoEnBarras(fecha) {
    console.log(`${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`);
}

console.info('Saliendo del script date3.js');