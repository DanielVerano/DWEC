// Crea un programa que pida al usuario un número entero por pantalla y muestre:

// Su valor exponencial.
// El número con 4 decimales.
// El número en binario.
// El número en octal.
// El número en hexadecimal.

let numero = parseInt(prompt('Introduce un número entero:', ''));

if (!isNaN(numero)) {
    console.log(numero.toExponential());
    console.log(numero.toFixed(4));
    console.log(numero.toString(2));
    console.log(numero.toString(8));
    console.log(numero.toString(16));
} else {
    console.error('El número introducido no es correcto');
}