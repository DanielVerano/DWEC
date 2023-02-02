let httpRequest;
const READY_STATE_COMPLETE = 4;
const HTTP_STATUS_OK = 200;
let titulo = document.getElementById('titulo');
let director = document.getElementById('director');
let cadena = document.getElementById('cadena');
let anyo = document.getElementById('anyo');
let terminada = document.getElementById('terminada');

function hacerPeticion(metodo, url) {
    let serie = {
        titulo: titulo.value,
        director: director.value,
        cadena: cadena.value,
        anyo: anyo.value,
        terminada: terminada.checked
    }
    // console.log(serie);

    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = mostrarContenido;
    httpRequest.open(metodo, url);
    httpRequest.setRequestHeader("Content-type", "application/json");
    httpRequest.send(JSON.stringify(serie));
}

function mostrarContenido() {
    if (this.readyState == READY_STATE_COMPLETE && this.status == HTTP_STATUS_OK) {
        // console.log(this.responseText);
        let resultado = document.getElementById('resultado');
        let respuesta = this.responseText;
        resultado.textContent = respuesta;

        if (respuesta == '"ok"') {
            resultado.style.color = 'green';
        } else {
            resultado.style.color = 'red';
        }
    }
}

window.onload = function () {
    document.getElementById('btn_enviar').addEventListener('click', () => {
        hacerPeticion('POST', './create-serie.php');
    })
}