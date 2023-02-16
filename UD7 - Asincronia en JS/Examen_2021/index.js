let httpRequest;
const ccaaSelect = document.getElementById('ccaa');
const dosis_entregadas = document.getElementById('dosis_entregadas');
const dosis_administradas = document.getElementById('dosis_administradas');
const dosis_completa = document.getElementById('dosis_completa');
const porcentaje_entregadas = document.getElementById('porcentaje_entregadas');
const porcentaje_administradas = document.getElementById('porcentaje_administradas');
const porcentaje_completa = document.getElementById('porcentaje_completa');

function generarComunidades(comunidades) {
    ccaaSelect.innerHTML = '';
    for (const com of comunidades) {
        let opt = document.createElement('option');
        opt.setAttribute('value', com.ccaa);
        opt.textContent = com.ccaa;
        ccaaSelect.appendChild(opt);
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
        ccaaRow.innerHTML = `
        <td>${ccaa.ccaa}</td>
        <td>${ccaa.dosisEntregadas}</td>
        <td>${ccaa.dosisAdministradas}</td>
        <td>${ccaa.dosisPautaCompletada}</td>
        <td>${ccaa.porcentajeEntregadas}</td>
        <td>${ccaa.porcentajePoblacionAdministradas}</td>
        <td>${ccaa.porcentajePoblacionCompletas}</td>`;
        tabla.appendChild(ccaaRow);
    }
}

function getComunidades() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            let datos = JSON.parse(this.responseText);

            // Filtrar los datos (Eliminar el último objeto Totales y coger solo los campos requeridos)
            let datos_filtrados = filtrar_datos(datos);
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = 'Datos cargados desde la web';
            generarComunidades(datos_filtrados);
            generarTabla(datos_filtrados);
            postComunidades(datos_filtrados);
        }
    };
    httpRequest.open('GET', './latest.json');
    httpRequest.send();
}

function getComunidadesFetch() {
    fetch('./latest.json', {
        method: 'GET',
    })
        .then(res => res.json())
        .then(datos => {
            let datos_filtrados = filtrar_datos(datos);
            generarComunidades(datos_filtrados);
            generarTabla(datos_filtrados);
            postComunidadesFetch(datos_filtrados);
        })
        .catch(err => console.log(err))
}

function postComunidades(datos) {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            // const resultado = document.getElementById('resultado');
            // resultado.innerHTML = 'Comunidades actualizadas en la base de datos';
        }
    };
    httpRequest.open('POST', './insertar_comunidades.php');
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify(datos));
}

function postComunidadesFetch(datos) {
    fetch('./insertar_comunidades.php', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = 'Comunidades actualizadas en la base de datos';
        })
        .catch(err => console.log(err))
}

function updateComunidad() {
    let com = {
        ccaa: ccaaSelect.value,
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
                    row.innerHTML = `
                    <td>${com_act.ccaa}</td>
                    <td>${com_act.dosisEntregadas}</td>
                    <td>${com_act.dosisAdministradas}</td>
                    <td>${com_act.dosisPautaCompletada}</td>
                    <td>${com_act.porcentajeEntregadas}</td>
                    <td>${com_act.porcentajePoblacionAdministradas}</td>
                    <td>${com_act.porcentajePoblacionCompletas}</td>`;
                    break;
                }
            }
        }
    };
    httpRequest.open('POST', './actualizar_comunidad.php');
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify(com));
}

function filtrar_datos(datos) {
    let comunidades = [];
    datos.forEach(comunidad => {
        if (comunidad.ccaa !== 'Totales') {
            let com_filtrada = {
                ccaa: comunidad.ccaa,
                dosisEntregadas: comunidad.dosisEntregadas,
                dosisAdministradas: comunidad.dosisAdministradas,
                dosisPautaCompletada: comunidad.dosisPautaCompletada,
                porcentajeEntregadas: comunidad.porcentajeEntregadas,
                porcentajePoblacionAdministradas: comunidad.porcentajePoblacionAdministradas,
                porcentajePoblacionCompletas: comunidad.porcentajePoblacionCompletas
            }
            comunidades.push(com_filtrada);
        }
    });
    return comunidades;
}

function iniciar() {
    document.getElementById('btn_XHR').addEventListener('click', () => {
        getComunidades();
    })
    document.getElementById('btn_actualizar_com').addEventListener('click', () => {
        updateComunidad();
    })
    document.getElementById('btn_fetch').addEventListener('click', () => {
        getComunidadesFetch();
    })
}

window.onload = iniciar;