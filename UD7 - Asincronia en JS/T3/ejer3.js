let httpRequest;

function descargaContenido(metodo, url) {
    httpRequest = new XMLHttpRequest();

    if (httpRequest) {
        httpRequest.onreadystatechange = mostrarContenido;
        httpRequest.open(metodo, url);
        httpRequest.send();
    }
}

function mostrarContenido() {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        const series = httpRequest.responseXML.getElementsByTagName('Serie');

        for (const serie of series) {
            for (let i = 0; i < serie.children.length; i++) {
                const clave = serie.children[i].tagName;
                const valor = serie.children[i].innerHTML;
                console.log(`${clave}=${valor}`);
            }
        }
    }
}

function iniciar() {
    descargaContenido('GET', '/UD7 - Asincronia en JS/T3/series.xml');
}

window.onload = iniciar;