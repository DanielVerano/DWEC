const paises = ['España', 'Portugal', 'Francia', 'Italia', 'Alemania'];

/**
 * * Mostrar el número de elementos del array.
 * @param {Array} array 
 */
function mostrarNumeroElementos(array) {
    // console.log(array.length);
    alert(`Número de países: ${array.length}`);
}

/**
 * * Mostrar todos los elementos del array.
 * @param {Array} array 
 */
function mostrarElementos(array) {
    // for (const obj of array) {
    //     console.log(obj);
    // }
    alert(`Elementos del array: ${array.toString()}`);
}

/**
 * * Muestra los elementos del array en sentido inverso.
 * @param {Array} array 
 */
function mostrarElementosInverso(array) {
    array.reverse();

    // for (const obj of array) {
    //     console.log(obj);
    // }
    alert(`Elementos del array en sentido inverso: ${array.toString()}`);
}

/**
 * * Muestra los elementos del array ordenados alfabéticamente (pero no los ordena).
 * @param {Array} array 
 */
function mostrarElementosOrdenados(array) {
    array.sort();

    // for (const obj of array) {
    //     console.log(obj);
    // }
    alert(`Elementos del array ordenados alfabéticamente: ${array.toString()}`);
}

/**
 * * Añadir un elemento al principio del array.
 * @param {Array} array 
 */
function anadirElementoPrincipio(array, elem) {
    array.unshift(elem);
    alert(`Se ha añadido el país ${elem} al principio del array`);
}

/**
 * * Añadir un elemento al final del array.
 * @param {Array} array 
 */
function anadirElementoFinal(array, elem) {
    array.push(elem);
    alert(`Se ha añadido el país ${elem} al final del array`);
}

/**
 * * Borrar un elemento al principio del array (y decir cuál se ha borrado).
 * @param {Array} array 
 */
function borrarElementoPrincipio(array) {
    let pais = array.shift();
    alert(`Se ha borrado el país ${pais} del array`);
}

/**
 * * Borrar un elemento al final del array (y decir cuál se ha borrado).
 * @param {Array} array 
 */
function borrarElementoFinal(array) {
    let pais = array.pop();
    alert(`Se ha borrado el país ${pais} del array`);
}

/**
 * * Muestra el elemento que se encuentra en una posición que el usuario indica.
 * @param {Array} array 
 * @param {Integer} posicion 
 */
function mostrarElementoPosicion(array, posicion) {
    // console.log(array[posicion]);
    if (posicion < 0 || posicion > array.length) {
        alert('La posición no existe en el array');
        return;
    }
    alert(`En la posición ${posicion} está el país ${array[posicion]}`);
}

/**
 * * Muestra la posición en la que se encuentra un elemento que le indica el usuario.
 * @param {Array} array 
 * @param {*} elem 
 */
function mostrarPosicionElemento(array, elem) {
    // console.log(array.indexOf(elem));
    alert(`El país ${elem} ocupa la posición ${paises.indexOf(elem)}`);
}

/**
 * * Muestra los elementos que se encuentran en un intervalo que el usuario indica.
 * @param {Array} array 
 * @param {Integer} ini 
 * @param {Integer} fin 
 */
function mostrarElementosIntervalo(array, ini, fin) {
    if (ini < 0) ini = 0;
    if (fin > array.length - 1) fin = array.length - 1;
    let resultado = '';

    for (let i = ini; i <= fin; i++) {
        // console.log(array[i]);
        resultado += `${array[i]}, `;
    }
    alert(`Países en el intervalo ${ini}-${fin}: ${resultado}`);
}

let opcion = prompt('Introduzca un número para la acción que desea realizar:\n1 - Mostrar número de países.\n2 - Mostrar listado de países.\n3 - Mostrar un intervalo de países.\n4 - Añadir un país.\n5 - Borrar un país.\n6 - Consultar un país.');

switch (opcion) {
    case '1':
        mostrarNumeroElementos(paises);
        break;
    case '2':
        ejecutarOpcion2();
        break;
    case '3':
        ejecutarOpcion3();
        break;
    case '4':
        ejecutarOpcion4();
        break;
    case '5':
        ejecutarOpcion5();
        break;
    case '6':
        ejecutarOpcion6();
        break;
    default:
        alert('Opción incorrecta');
        break;
}

function ejecutarOpcion2() {
    opcion = prompt('Indique como desea mostrar los países:\n1 - Orden por defecto.\n2 - Del revés.\n3 - Ordenados alfabéticamente.');

    switch (opcion) {
        case '1':
            mostrarElementos(paises);
            break;
        case '2':
            mostrarElementosInverso(paises);
            break;
        case '3':
            mostrarElementosOrdenados(paises);
            break;
        default:
            alert('Opción incorrecta');
            break;
    }
}

function ejecutarOpcion3() {
    opcion = prompt('Introduzca el intervalo en formato inicio-fin:');

    let intervalo = opcion.split('-');

    if (intervalo) {
        const ini = parseInt(intervalo[0]);
        const fin = parseInt(intervalo[1]);
        mostrarElementosIntervalo(paises, ini, fin);
    } else {
        alert('El intervalo introducido no es correcto');
    }
}

function ejecutarOpcion4() {
    const pais = prompt('Introduzca el país que desea añadir:');
    opcion = prompt('Introduzca si quiere añadir al principio o al final:\n1 - Al principio.\n2 - Al final.')

    switch (opcion) {
        case '1':
            anadirElementoPrincipio(paises, pais);
            mostrarElementos(paises);
            break;
        case '2':
            anadirElementoFinal(paises, pais);
            mostrarElementos(paises);
            break;
        default:
            alert('Opción incorrecta');
            break;
    }
}

function ejecutarOpcion5() {
    opcion = prompt('Introduzca si quiere borrar al principio o al final:\n1 - Al principio.\n2 - Al final.');

    switch (opcion) {
        case '1':
            borrarElementoPrincipio(paises);
            mostrarElementos(paises);
            break;
        case '2':
            borrarElementoFinal(paises);
            mostrarElementos(paises);
            break;
        default:
            alert('Opción incorrecta');
            break;
    }
}

function ejecutarOpcion6() {
    opcion = prompt('Indique como desea consultar un país:\n1 - Por posición.\n2 - Por nombre.');

    switch (opcion) {
        case '1':
            opcion = prompt('Introduzca la posición:');

            if (isNaN(opcion)) {
                alert('La posición no es válida');
            } else {
                mostrarElementoPosicion(paises, parseInt(opcion));
            }
            break;
        case '2':
            opcion = prompt('Introduzca el nombre del país que desea buscar:');
            mostrarPosicionElemento(paises, opcion);
            break;
        default:
            alert('Opción incorrecta');
            break;
    }
}

// mostrarNumeroElementos(paises);
// mostrarElementos(paises);
// mostrarElementosInverso(paises);
// mostrarElementosOrdenados(paises);

// anadirElementoPrincipio(paises, 'Dinamarca');
// anadirElementoFinal(paises, 'Dinamarca');
// borrarElementoPrincipio(paises);
// borrarElementoFinal(paises);
// mostrarElementos(paises);

// mostrarElementoPosicion(paises, 0);
// mostrarPosicionElemento(paises, 'España');
// mostrarElementosIntervalo(paises, 0, 1);