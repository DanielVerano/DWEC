// Crea un programa que pida al usuario un número entero por pantalla y muestre:

// Su valor exponencial.
// El número con 4 decimales.
// El número en binario.
// El número en octal.
// El número en hexadecimal.

console.info('Ejecutando script number1.js');

// let numero = parseInt(prompt('Introduce un número entero:', ''));
let numero = process.argv.slice(2)[0];

if (!isNaN(numero)) {
    numero = parseInt(numero);
    console.log(`Valor exponencial: ${numero.toExponential()}`);
    console.log(`Número con 4 decimales: ${numero.toFixed(4)}`);
    console.log(`Número en binario: ${numero.toString(2)}`);
    console.log(`Número en octal: ${numero.toString(8)}`);
    console.log(`Número en hexadecimal: ${numero.toString(16)}`);
} else {
    console.error('El número introducido no es correcto');
}

console.info('Saliendo del script number1.js');