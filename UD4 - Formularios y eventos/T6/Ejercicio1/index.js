window.onload = iniciar;

function iniciar() {
    document.getElementById('dni').addEventListener('keyup', validarDNI);
    document.getElementById('nombre').addEventListener('keyup', validarNombre);
    document.getElementById('num_hijos').addEventListener('keyup', validarNumHijos);
    document.getElementById('email').addEventListener('keyup', validarEmail);
    document.getElementById('web').addEventListener('keyup', validarWeb);
    document.getElementById('contrasena').addEventListener('keyup', validarContrasena);
    document.getElementById('main-form').addEventListener('submit', validarForm);
}

/**
 * 
 * @param {Event} event 
 * @returns {Boolean}
 */
function validarDNI() {
    let dni = document.getElementById('dni').value;
    dni = dni.replace(/\.|\-/g, '');
    console.log(dni);
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
    let resultado;

    resultado = dni.substring(0, 8) % 23 == letras.indexOf(dni.charAt(dni.length - 1));

    if (!resultado) {
        document.getElementsByTagName('label')[0].classList.add('error');
        document.getElementById('dni').classList.add('error');
    } else {
        document.getElementsByTagName('label')[0].classList.remove('error');
        document.getElementById('dni').classList.remove('error');
    }
    return resultado;
}

function validarNombre() {
    const nombre = document.getElementById('nombre').value;
    const pattern = /([a-zA-Z]+\s[a-zA-Z]+)(\s[a-zA-Z]+){0,2}/;
    let resultado = pattern.test(nombre);

    if (!resultado) {
        document.getElementsByTagName('label')[1].classList.add('error');
        document.getElementById('nombre').classList.add('error');
    } else {
        document.getElementsByTagName('label')[1].classList.remove('error');
        document.getElementById('nombre').classList.remove('error');
    }

    return resultado;
}

function validarNumHijos() {
    const numHijos = document.getElementById('num_hijos').value;
    let resultado = numHijos >= 0;

    if (!resultado) {
        document.getElementsByTagName('label')[3].classList.add('error');
        document.getElementById('num_hijos').classList.add('error');
    } else {
        document.getElementsByTagName('label')[3].classList.remove('error');
        document.getElementById('num_hijos').classList.remove('error');
    }
    return resultado;
}

function validarEmail() {
    const email = document.getElementById('email').value;
    const pattern = /^(.+\@.+\..+)$/;
    let resultado = pattern.test(email);

    if (!resultado) {
        document.getElementsByTagName('label')[4].classList.add('error');
        document.getElementById('email').classList.add('error');
    } else {
        document.getElementsByTagName('label')[4].classList.remove('error');
        document.getElementById('email').classList.remove('error');
    }
    return resultado;
}

function validarWeb() {
    const web = document.getElementById('web').value;
    const pattern = /^(?:https?\:\/\/)?(?:[a-z0-9][a-z0-9\-]*\.)+[a-z0-9][a-z0-9\-]*$/;
    let resultado = pattern.test(web);

    if (!resultado) {
        document.getElementsByTagName('label')[5].classList.add('error');
        document.getElementById('web').classList.add('error');
    } else {
        document.getElementsByTagName('label')[5].classList.remove('error');
        document.getElementById('web').classList.remove('error');
    }
    return resultado;
}

function validarContrasena() {
    const contrasena = document.getElementById('contrasena').value;
    const pattern = /^.{8,10}$/;
    let resultado = pattern.test(contrasena);

    if (!resultado) {
        document.getElementsByTagName('label')[6].classList.add('error');
        document.getElementById('contrasena').classList.add('error');
    } else {
        document.getElementsByTagName('label')[6].classList.remove('error');
        document.getElementById('contrasena').classList.remove('error');
    }
    return resultado;
}

function validarFecha() {
    const fecha = document.getElementById('fecha_nac').value;

    let date = new Date(fecha);
    return date.getFullYear() >= 1900;
}

function validarForm(e) {
    if (validarDNI() && validarNombre() && validarNumHijos() && validarEmail() && validarWeb() && validarContrasena() && validarFecha()) {
        return true;
    } else {
        e.preventDefault();
    }
}