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
        const series = JSON.parse(httpRequest.responseText);
        const tabla = document.getElementById('tabla');

        // Eliminar la tabla si ya existe
        while (tabla.firstElementChild) {
            tabla.removeChild(tabla.firstElementChild);
        }

        if (series) {
            // Crear la fila de los headers
            let headersRow = document.createElement('tr');

            for (const key in series[0]) {
                // console.log(`${key}=${series[0][key]}`);
                let td = document.createElement('th');
                td.textContent = `${key.charAt(0).toUpperCase()}${key.slice(1)}`;
                headersRow.appendChild(td);
            }
            tabla.appendChild(headersRow);
        }

        // Añadir los diferentes datos de cada serie
        for (const serie of series) {
            let tr = document.createElement('tr');

            for (const key in serie) {
                const valor = serie[key];

                let td = document.createElement('td');

                if (key === 'titulo') {
                    td.style.fontWeight = 'bold';
                } else if (key === 'director') {
                    td.style.fontStyle = 'italic';
                } else if (key === 'anio') {
                    td.style.color = calculaColorAnio(valor);
                } else if (key === 'terminada') {
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

    if (terminado === true) {
        img.setAttribute('src', './img/green_tick.png');
    } else if (terminado === false) {
        img.setAttribute('src', './img/red_x.png');
    }
    return img;
}

function iniciar() {
    document.getElementById('recargarSeries').addEventListener('click', () => {
        descargaContenido('GET', './series.json');
    });
}

window.onload = iniciar;