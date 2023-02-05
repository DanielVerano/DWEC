let httpRequest;
const ccaa = document.getElementById('ccaa');
const dosis_entregadas = document.getElementById('dosis_entregadas');
const dosis_administradas = document.getElementById('dosis_administradas');
const dosis_completa = document.getElementById('dosis_completa');
const porcentaje_entregadas = document.getElementById('porcentaje_entregadas');
const porcentaje_administradas = document.getElementById('porcentaje_administradas');
const porcentaje_completa = document.getElementById('porcentaje_completa');

function hacerPeticion(metodo, url, datos) {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            procesarJson();
        }
    };

    httpRequest.open(metodo, url);
    if (metodo === 'POST') {
        httpRequest.setRequestHeader('Content-Type', 'application/json');

        if (!datos) {
            datos = {
                ccaa: ccaa.value,
                dosisEntregadas: dosis_entregadas.value,
                dosisAdministradas: dosis_administradas.value,
                dosisPautaCompletada: dosis_completa.value,
                porcentajeEntregadas: porcentaje_entregadas.value,
                porcentajePoblacionAdministradas: porcentaje_administradas.value,
                porcentajePoblacionCompletas: porcentaje_completa.value
            }
        }
        httpRequest.send(JSON.stringify(datos));
    } else {
        httpRequest.send();
    }
}

function procesarJson() {
    const datos = JSON.parse(httpRequest.responseText);
    generarComunidades(datos);
    hacerPeticion('POST', './insertar_comunidades.php', datos);
    generarTabla(datos);
}

function generarComunidades(comunidades) {
    for (const com of comunidades) {
        let opt = document.createElement('option');
        opt.setAttribute('value', com.ccaa);
        opt.textContent = com.ccaa;
        ccaa.appendChild(opt);
    }
}

function generarTabla(datos) {
    const tabla = document.getElementById('datos_vacunacion');

    while (tabla.firstElementChild) {
        tabla.removeChild(tabla.firstElementChild);
    }

    tabla.innerHTML = `<tr><th>Comunidad</th><th>D. Entregadas</th><th>D. Admin.</th><th>D. Completa</th><th>% Entregadas</th><th>% Pobl. Admin.</th><th>% Pobl. Completa</th>`;

    for (const ccaa of datos) {
        let ccaaRow = document.createElement('tr');
        ccaaRow.innerHTML = `<td>${ccaa.ccaa}</td><td>${ccaa.dosisEntregadas}</td><td>${ccaa.dosisAdministradas}</td><td>${ccaa.dosisPautaCompletada}</td><td>${ccaa.porcentajeEntregadas}</td><td>${ccaa.porcentajePoblacionAdministradas}</td><td>${ccaa.porcentajePoblacionCompletas}</td>`;
        tabla.appendChild(ccaaRow);
    }
}

function getComunidades() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            const datos = JSON.parse(this.responseText);
            generarComunidades(datos);
            generarTabla(datos);
            postComunidades(datos);
        }
    };
    httpRequest.open('GET', './latest.json');
    httpRequest.send();
}

function postComunidades(datos) {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = 'Comunidades actualizadas en la base de datos';
        }
    };
    httpRequest.open('POST', './insertar_comunidades.php');
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify(datos));
}

function updateComunidad() {
    let com = {
        ccaa: ccaa.value,
        dosisEntregadas: dosis_entregadas.value,
        dosisAdministradas: dosis_administradas.value,
        dosisPautaCompletada: dosis_completa.value,
        porcentajeEntregadas: porcentaje_entregadas.value,
        porcentajePoblacionAdministradas: porcentaje_administradas.value,
        porcentajePoblacionCompletas: porcentaje_completa.value
    };

    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            let com_act = JSON.parse(this.responseText);
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = 'Comunidad actualizada';

            const tablaRows = document.getElementById('datos_vacunacion').getElementsByTagName('tr');

            for (const row of tablaRows) {
                if (row.firstElementChild.innerHTML === com.ccaa) {
                    row.innerHTML = `<td>${com_act.ccaa}</td><td>${com_act.dosisEntregadas}</td><td>${com_act.dosisAdministradas}</td><td>${com_act.dosisPautaCompletada}</td><td>${com_act.porcentajeEntregadas}</td><td>${com_act.porcentajePoblacionAdministradas}</td><td>${com_act.porcentajePoblacionCompletas}</td>`;
                    break;
                }
            }
        }
    };
    httpRequest.open('POST', './actualizar_comunidad.php');
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify(com));
}

function iniciar() {
    document.getElementById('btn_XHR').addEventListener('click', () => {
        getComunidades();
    })
    document.getElementById('btn_actualizar_com').addEventListener('click', () => {
        updateComunidad();
        // hacerPeticion('POST', './actualizar_comunidad.php');
    })
}

window.onload = iniciar;