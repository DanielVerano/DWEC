let httpRequest;

function descargaArchivo(url, metodo) {
    if (window.XMLHttpRequest) httpRequest = new XMLHttpRequest();

    if (httpRequest) {
        httpRequest.onreadystatechange = muestraContenido;
        httpRequest.open(metodo, url);
        httpRequest.send();
    }
}

function muestraContenido() {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = httpRequest.responseText;

        httpRequest.responseText === 'SI' ? resultadoDiv.style.backgroundColor = 'green' : resultadoDiv.style.backgroundColor = 'red';
    }
}

function comprobarLocalidad() {
    let loc = document.getElementById('localidad').value;
    descargaArchivo(`http://localhost:8090/UD7 - Asincronia en JS/T2/localidad.php?localidad=${loc}`, "GET");
}

function iniciar() {
    document.getElementById('enviar').addEventListener('click', comprobarLocalidad);
}

window.onload = iniciar;