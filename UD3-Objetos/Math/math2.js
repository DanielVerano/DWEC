// Crea un programa que pida al usuario el valor del radio y muestre por pantalla:

//     El valor del radio.
//     El valor del diámetro.
//     El valor del perímetro de la circunferencia.
//     El valor del área del círculo.
//     El valor del área de la esfera.
//     El valor del volumen de la esfera.

let radio = parseFloat(prompt('Introduce el valor del radio:', ''));

if (!isNaN(radio)) {
    let diametro = radio * 2;
    let perimetro = (diametro * Math.PI).toFixed(2);
    let areaCirculo = (Math.PI * radio ** 2).toFixed(2);
    let areaEsfera = (4 * Math.PI * radio ** 2).toFixed(2);
    let volumenEsfera = (4 / 3 * Math.PI * radio ** 3).toFixed(2);

    console.log(`Radio: ${radio} cm \nDiámetro: ${diametro} cm \nPerímetro: ${perimetro} cm \nÁrea del círculo: ${areaCirculo} cm2 \nÁrea de la esfera: ${areaEsfera} cm2 \nVolumen de la esfera: ${volumenEsfera} cm3`);
} else {
    console.error('El radio introducido no es válido');
}