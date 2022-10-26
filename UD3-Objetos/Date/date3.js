// Crea un programa que muestre la fecha actual en diferentes formatos, según el valor que introduzca el usuario por parámetro:
// 15/10/2020
// Jueves, 15 de octubre de 2020.
// Thursday, October 15, 2020.

console.info('Ejecutando script date3.js');

let fecha = process.argv.slice(2);
fecha = fecha[0].split('/');

let dia = Number(fecha[0]);
let mes = Number(fecha[1]) - 1;
let anio = Number(fecha[2]);

const fechaActual = new Date(anio, mes, dia);

/**
 * * Función que saca por pantalla una fecha que se pasa por parámetro en un formato similar al siguiente: 'Miércoles, 19 de Octubre de 2022.'
 * @param {Date} fecha 
 */
function formatoEnEspanol(fecha) {
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    console.log(`${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}.`);
}

/**
 * * Función que saca por pantalla una fecha que se pasa por parámetro en un formato similar al siguiente: 'Wednesday, October 19, 2022.'
 * @param {Date} fecha 
 */
function formatoEnIngles(fecha) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septembre', 'October', 'November', 'December'];

    console.log(`${days[fechaActual.getDay()]}, ${months[fechaActual.getMonth()]} ${fechaActual.getDate()}, ${fechaActual.getFullYear()}.`);
}

formatoEnEspanol(fechaActual);
formatoEnIngles(fechaActual);

console.info('Saliendo del script date3.js');