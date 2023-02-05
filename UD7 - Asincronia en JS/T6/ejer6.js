let titulo = document.getElementById('titulo');
let director = document.getElementById('director');
let cadena = document.getElementById('cadena');
let anyo = document.getElementById('anyo');
let terminada = document.getElementById('terminada');

function insertarSerie() {
    let serie = {
        titulo: titulo.value,
        director: director.value,
        cadena: cadena.value,
        anyo: anyo.value,
        terminada: terminada.checked
    }
    let resultado = document.getElementById('resultado');

    fetch('./create_serie.php', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(serie)
    })
        .then(respuesta => respuesta.text())
        .then(data => resultado.innerHTML = data)
        .catch(err => console.log(err))
}

function listarSeries() {
    fetch('./listar_series.php')
        .then(response => response.json())
        .then(data => {
            let tabla = document.getElementById('series');

            while (tabla.firstElementChild) {
                tabla.removeChild(tabla.firstElementChild);
            }
            tabla.innerHTML = `<tr><th>Título</th><th>Director</th><th>Cadena</th><th>Año</th><th>Terminada</th></tr>`;

            for (const serie of data) {
                let serieRow = document.createElement('tr');
                serieRow.innerHTML = `<td>${serie.titulo}</td><td>${serie.director}</td><td>${serie.cadena}</td><td>${serie.anyo}</td><td>${serie.terminada}</td>`;
                tabla.appendChild(serieRow);
            }
        })
        .catch(err => console.log(err))
}

window.onload = function () {
    document.getElementById('btn_enviar').addEventListener('click', () => {
        insertarSerie();
        listarSeries();
    })
    listarSeries();
}