// Crea un programa que pida al usuario que elija una opción del siguiente menú:

//     Potencia.
//     Raíz.
//     Redondeo.
//     Trigonometría.
console.info('Ejecutando script math1.js');

// let opcion = prompt('Introduce una opción del 1 al 4:', 0);
let opcion = process.argv.slice(2)[0];

switch (opcion) {
    case '1':
        potencia();
        break;
    case '2':
        raiz();
        break;
    case '3':
        redondeo();
        break;
    case '4':
        trigonometria();
        break;
    default:
        console.error('Opción no válida');
        break;
}
console.info('Saliendo del script math1.js');

/**
 * * Función que pide al usuario una base y un exponente y saca el resultado por pantalla.
 * @returns 
 */
function potencia() {
    // let base = prompt('Introduce una base:', '');
    // let exp = prompt('Introduce un exponente', '');
    let base = process.argv.slice(2)[1];
    let exp = process.argv.slice(2)[2];

    if (!esNumero(base) || !esNumero(exp)) {
        console.error('El formato de los números no es correcto');
        return;
    }
    let resultado = base ** exp;
    console.log(`La potencia de ${base} elevado a ${exp} es: ${resultado}`);
}

/**
 * * Función que pide al usuario un número no negativo y saca por pantalla la raíz cuadrada de ese número
 * @returns 
 */
function raiz() {
    // let numero = prompt('Introduce un número no negativo:', '');
    let numero = process.argv.slice(2)[1];

    if (!esNumero(numero) || numero < 0) {
        console.error('El número introducido no es válido');
        return;
    }

    let resultado = Math.sqrt(numero);
    console.log(`La raíz de ${numero} es ${resultado}`);
}

/**
 * * Función que pide al usuario un número decimal y saca por pantalla su redondeo al entero más próximo, al alta y a la baja.
 * @returns 
 */
function redondeo() {
    // let decimal = parseFloat(prompt('Introduce un número decimal:', ''));
    let decimal = process.argv.slice(2)[1];

    if (!esNumero(decimal)) {
        console.error('El número introducido no es válido');
        return;
    }

    console.log(`El redondeo de ${decimal} al entero más próximo es ${Math.round(decimal)}`);
    console.log(`El redondeo de ${decimal} al alta es ${Math.ceil(decimal)}`);
    console.log(`El redondeo de ${decimal} a la baja es ${Math.trunc(decimal)}`);
}

/**
 * * Función que pide al usuario un ángulo en grados y saca por pantalla su seno, coseno y tangente.
 * @returns 
 */
function trigonometria() {
    // let angulo = parseInt(prompt('Introduce un ángulo (entre 0 y 360):', ''));
    let angulo = process.argv.slice(2)[1];

    if (!esNumero(angulo) || angulo < 0 || angulo > 360) {
        console.error('El ángulo introducido es incorrecto');
        return;
    }

    let radianes = gradosARadianes(angulo);
    console.log(`El seno de ${angulo} es ${Math.sin(radianes)}`);
    console.log(`El coseno de ${angulo} es ${Math.cos(radianes)}`);
    console.log(`La tangente de ${angulo} es ${Math.tan(radianes)}`);
}

/**
 * * Función que comprueba si el parámetro pasado es un número.
 * @param {Number} numero 
 * @returns 
 */
function esNumero(numero) {
    return numero !== null && !isNaN(numero);
}

/**
 * * Función que convierte los grados pasados por parámetro a radianes.
 * @param {Number} grados 
 * @returns 
 */
function gradosARadianes(grados) {
    return grados * Math.PI / 180;
}