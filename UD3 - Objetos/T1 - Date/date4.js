// Crea un programa que muestre la hora actual en diferentes formatos, según el valor que introduzca el usuario por parámetro:

// 14:35:07 (hora detallada con minutos y segundos)
// 02:35 PM o 02:35:07 AM (hora con minutos y AM o PM según sea antes o después del medio día)

console.info('Ejecutando script date4.js');

let opcion = process.argv.slice(2)[0];
const horaActual = new Date();

switch (opcion) {
    case '1':
        console.log(horaActual.toLocaleTimeString());
        break;
    case '2':
        console.log(horaActual.toLocaleTimeString("en", { hour12: true }));
        break;
    default:
        console.error('La opción introducida es incorrecta');
        break;
}

console.info('Saliendo del script date4.js');