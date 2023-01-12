/**
 * * Función que intercambia las letras en minúsculas a mayúsculas y viceversa a la cadena en función del número que se pasa como parámetro.
 * @param {String} cadena 
 * @param {Integer} numCaracteres 
 */
function cambiarTamanoLetras(cadena, numCaracteres) {
    let restante = numCaracteres;
    let resultado = '';

    for (let letra of cadena) {
        restante--;
        if (restante === 0) {
            if (letra === letra.toLowerCase()) {
                letra = letra.toUpperCase();
            } else {
                letra = letra.toLowerCase();
            }
            restante = numCaracteres;
        }
        resultado += letra;
    }
    console.log(resultado);
}

cambiarTamanoLetras('01a01b01C01d', 3);
cambiarTamanoLetras('Hola', 1);