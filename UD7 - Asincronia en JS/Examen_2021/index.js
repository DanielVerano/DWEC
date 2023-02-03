let httpRequest;

function hacerPeticion(metodo, url) {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            procesarJson();
        }
    };

    if (metodo === 'POST') {
        httpRequest.setRequestHeader('Content-Type', 'application/json');
    }
    httpRequest.open(metodo, url);
    httpRequest.send();
}

function procesarJson() {
    const datos = JSON.parse(httpRequest.responseText);
    generarComunidades(datos);
}

function generarComunidades(comunidades) {
    const ccaa = document.getElementById('ccaa');

    for (const com of comunidades) {
        let opt = document.createElement('option');
        opt.setAttribute('value', com.ccaa);
        opt.textContent = com.ccaa;
        ccaa.appendChild(opt);
    }
}

function iniciar() {
    document.getElementById('btn_XHR').addEventListener('click', () => {
        hacerPeticion('GET', './latest.json');
    })
    document.getElementById('btn_actualizar_com').addEventListener('click', () => {
        hacerPeticion('POST', './actualizar_comunidad.php');
    })
}

window.onload = iniciar;