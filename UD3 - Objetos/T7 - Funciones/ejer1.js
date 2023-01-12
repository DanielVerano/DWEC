/**
 * * Función que calcula el índice de masa corporal en función de la altura en cms y el peso en kilogramos.
 * @param {Integer} altura 
 * @param {Integer} peso 
 */
function calcularIMC(altura, peso) {
    altura = parseFloat(altura);
    peso = parseInt(peso);

    let imc = peso / (altura / 100) ** 2;
    alert(`Su índice de masa corporal es ${imc.toFixed(2)}`);
}

/**
 * * Función que calcula la frecuencia cardíaca máxima en función de la edad.
 * @param {Integer} edad 
 */
function calcularFCM(edad) {
    edad = parseInt(edad);

    let fcm = 220 - edad;
    alert(`Su frecuencia cardíaca máxima es ${fcm}`);
}