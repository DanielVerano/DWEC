// Crea un programa que pida al usuario una propuesta de contraseña y  compruebe si cumple con los siguientes requisitos.

//     Tiene entre 8 y 16 caracteres.
//     Tiene una letra mayúscula.
//     Tiene una letra minúscula.
//     Tiene un número.
//     Tiene uno de los siguientes valores: guión alto, guión bajo, arroba,  almohadilla, dólar, tanto por ciento o ampersand.

// Si cumple con todos los requisitos se considera una contraseña segura, de lo  contrario mostrará que es una contraseña no segura.

// Patrón para comprobar contraseña: ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$

console.info('Ejecutando script string2.js');

// let password = prompt('Introduce una contraseña que cumpla los requisitos:', '');
let password = process.argv.slice(2)[0];

/**
 * * Función que comprueba si la longitud de la contraseña está entre los valores 8 y 16.
 * @param {String} password 
 * @returns 
 */
function longitudEsCorrecta(password) {
    return password.length >= 8 && password.length <= 16;
}

/**
 * * Función que comprueba si la contraseña tiene al menos un caracter en mayúsculas.
 * @param {String} password 
 */
function tieneLetraMayuscula(password) {
    // A-Z : 65-90
    for (const letra of password) {
        if (letra.codePointAt(0) >= 65 && letra.codePointAt(0) <= 90) return true;
    }
    return false;
}

/**
 * * Función que comprueba si la contraseña tiene al menos un caracter en minúsculas.
 * @param {String} password 
 */
function tieneLetraMinuscula(password) {
    // a-z : 97-122
    for (const letra of password) {
        if (letra.codePointAt(0) >= 97 && letra.codePointAt(0) <= 122) return true;
    }
    return false;
}

/**
 * * Función que comprueba si la contraseña tiene al menos un número.
 * @param {String} password 
 * @returns 
 */
function tieneNumero(password) {
    for (const caracter of password) {
        if (Number.isInteger(parseInt(caracter))) return true;
    }
    return false;
}

/**
 * * Función que comprueba si la contraseña tiene al menos un símbolo.
 * @param {String} password 
 */
function tieneSimbolo(password) {
    const simbolos = '-_@#$%&';
    for (const caracter of password) {
        for (const simbolo of simbolos) {
            if (caracter === simbolo) return true;
        }
    }
    return false;
}

/**
 * * Función que comprueba si la contraseña es segura llamando a los métodos anteriores.
 * @param {String} password 
 * @returns 
 */
function contrasenaEsSegura(password) {
    return tieneLetraMayuscula(password) && tieneLetraMinuscula(password) &&
        tieneNumero(password) && tieneSimbolo(password);
}

(contrasenaEsSegura(password)) ? console.log('Tu contraseña es segura') : console.log('Tu contraseña no cumple con alguno de los requisitos');

// console.log(tieneLetraMayuscula(password));
// console.log(tieneLetraMinuscula(password));
// console.log(tieneNumero(password));
// console.log(tieneSimbolo(password));

console.info('Saliendo del script string2-js');