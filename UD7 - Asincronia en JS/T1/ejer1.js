let READY_STATE_UNINITIALIZED = 0;
let READY_STATE_LOADING = 1;
let READY_STATE_LOADED = 2;
let READY_STATE_INTERACTIVE = 3;
let READY_STATE_COMPLETE = 4;

let HTTP_STATUS_OK = 200;
let HTTP_STATUS_NOT_FOUND = 404;
let HTTP_STATUS_SERVER_ERROR = 500;

let peticion_http;

function cargaContenido(url, metodo) {
    // Comprobar si el navegador soporta AJAX
    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    } else {
        alert("No tienes soporte para AJAX");
    }

    if (peticion_http) {
        peticion_http.onreadystatechange = muestraContenido;
        peticion_http.open(metodo, url, true);
        peticion_http.send(null);
    }
}

function muestraContenido(req) {
    if (peticion_http.readyState === READY_STATE_COMPLETE && peticion_http.status === HTTP_STATUS_OK) {
        const textArea = document.getElementById('texto');
        textArea.textContent = peticion_http.responseText;
    }
}

function descargaArchivo() {
    cargaContenido("http://localhost:5500/UD7 - Asincronia en JS/T1/holamundo.txt", "GET");
}

document.getElementById('botonTexto').addEventListener('click', descargaArchivo);