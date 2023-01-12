window.onload = iniciar;

function iniciar() {
    document.getElementById('main-form').addEventListener('submit', validarDatos);
}

function validarDatos() {
    const nombreInput = document.getElementById('nombre');
    const grupoInput = document.getElementById('grupo');

    if (validarCampo20(nombre) && validarCampo20(grupo)) {
        alert('Todos los datos son correctos');
        return true;
    }
    return false;
}

function validarCampo20(input) {
    const pattern = /[a-zA-Z]{20,}/;
    const valor = input.value;
    const resultado = pattern.test(valor);

    return resultado;
}