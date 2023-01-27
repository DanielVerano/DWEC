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
        const tabla = document.getElementById('tabla');

        // Eliminar la tabla si ya existe
        while (tabla.firstElementChild) {
            tabla.removeChild(tabla.firstElementChild);
        }

        if (series) {
            // Crear la fila de los headers
            let headersRow = document.createElement('tr');

            for (let i = 0; i < series[0].children.length; i++) {
                let etiqueta = series[0].children[i].tagName;
                let td = document.createElement('th');
                // Poner la primera letra de la etiqueta en mayúsculas
                td.textContent = `${etiqueta.charAt(0).toUpperCase()}${etiqueta.slice(1)}`;
                headersRow.appendChild(td);
            }
            tabla.appendChild(headersRow);

            // Añadir los diferentes datos de cada serie
            for (const serie of series) {
                let tr = document.createElement('tr');

                for (let i = 0; i < serie.children.length; i++) {
                    const etiqueta = serie.children[i].tagName;
                    const valor = serie.children[i].innerHTML;
                    let td = document.createElement('td');

                    if (etiqueta === 'titulo') {
                        td.style.fontWeight = 'bold';
                    } else if (etiqueta === 'director') {
                        td.style.fontStyle = 'italic';
                    } else if (etiqueta === 'anio') {
                        td.style.color = calculaColorAnio(valor);
                    } else if (etiqueta === 'terminada') {
                        let img = estaTerminada(valor);
                        td.appendChild(img);
                    }
                    td.appendChild(document.createTextNode(valor));
                    tr.appendChild(td);
                }
                tabla.appendChild(tr);
            }
        }
    }
}

function calculaColorAnio(anio) {
    anio = Number(anio);
    let color;

    if (isNaN(anio)) return null;

    if (anio < 2000) {
        color = 'red';
    } else if (anio > 1999 && anio < 2011) {
        color = 'yellow';
    } else if (anio > 2010) {
        color = 'green';
    }
    return color;
}

function estaTerminada(terminado) {
    let img = document.createElement('img');
    img.style.width = '10%';

    if (terminado === 'true') {
        img.setAttribute('src', './img/green_tick.png');
    } else if (terminado === 'false') {
        img.setAttribute('src', './img/red_x.png');
    }
    return img;
}

function iniciar() {
    document.getElementById('recargarSeries').addEventListener('click', () => {
        descargaContenido('GET', '/UD7 - Asincronia en JS/T3/series.xml');
    });
}

window.onload = iniciar;