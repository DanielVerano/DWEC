// Crea un programa que pida al usuario su nombre y apellidos y muestre:

//     El tamaño del nombre más los apellidos (sin contar espacios).
//     La cadena en minúsculas y en mayúsculas.
//     Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga Nombre: / Apellido1: / Apellido 2:
//     Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido: ej. Para José María García Durán sería jgarciad.
//     Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y delos dos apellidos: ej. josgardur.

let nombre = prompt('Introduce su nombre:', '');
let apellidos = prompt('Introduce sus apellidos:', '');

if (nombre !== null && nombre !== '' && apellidos !== null && apellidos !== '') {
    const tamanoNombre = nombre.replace(' ', '').length + apellidos.replace(' ', '').length;
    console.log(`El tamaño del nombre más los apellidos sin espacios es: ${tamanoNombre}`);

    console.log(`La cadena en minúsculas es ${nombre.toLowerCase()} ${apellidos.toLowerCase()}`);
    console.log(`La cadena en mayúsculas es ${nombre.toUpperCase()} ${apellidos.toUpperCase()}`);

    console.log(`Nombre: ${nombre} / Apellido1: ${apellidos.split(' ')[0]} / Apellido2: ${apellidos.split(' ')[1]}`);

    console.log(`${nombre.charAt(0).toLowerCase()}${apellidos.split(' ')[0].toLowerCase()}${apellidos.split(' ')[1].charAt(0).toLowerCase()}`);

    console.log(`${nombre.substring(0, 3).toLowerCase()}${apellidos.split(' ')[0].substring(0, 3).toLowerCase()}${apellidos.split(' ')[1].substring(0, 3).toLowerCase()}`);
} else {
    console.error('El nombre o los apellidos introducidos no tienen el formato correcto');
}