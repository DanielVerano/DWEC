window.onload = iniciar;

function iniciar() {
    document.getElementById('nombre').addEventListener('keydown', validarCampo20);
    document.getElementById('grupo').addEventListener('keydown', validarCampo20);
}

/**
 * 
 * @param {Event} evento 
 * @returns {Boolean}
 */
function validarCampo20(evento) {
    const input = evento.target;
    const valor = input.value;
    const pattern = /[a-zA-Z]{20,}/;
    const resultado = pattern.test(valor);

    if (!resultado) {
        input.previousElementSibling.classList.add('letras-rojas');
        input.classList.add('error');
    } else {
        input.previousElementSibling.classList.remove('letras-rojas');
        input.classList.remove('error');
    }
    return resultado;
}