// Crea un programa que muestre la hora actual en diferentes formatos, según el valor que introduzca el usuario por parámetro:

// 14:35:07 (hora detallada con minutos y segundos)
// 02:35 PM o 02:35:07 AM (hora con minutos y AM o PM según sea antes o después del medio día)

console.info('Ejecutando script date4.js');

let hora = process.argv.slice(2);
hora = hora[0].split(':');

if (hora.length !== 3) {
    console.error('El formato introducido es incorrecto');
    return;
}

const horas = Number(hora[0]);
const minutos = Number(hora[1]);
const segundos = Number(hora[2]);
let resultado = '';

// Comprobamos si el resto de dividir las horas entre 12 es menor que 10, en ese caso añadimos un 0 delante
if (horas % 12 < 10) {
    resultado += `0${horas % 12}:`;
} else {
    resultado += `${horas % 12}:`;
}

// Hacemos la misma comprobación para los minutos
if (minutos < 10) {
    resultado += `0${minutos}`;
} else {
    resultado += `${minutos}`;
}

// Comprobamos si las horas es mayor o igual a 12 o menor que 12 para añadir PM o AM.
if (horas >= 12) {
    resultado += ' PM';
} else {
    resultado += ' AM';
}

console.log(resultado);
console.info('Saliendo del script date4.js');