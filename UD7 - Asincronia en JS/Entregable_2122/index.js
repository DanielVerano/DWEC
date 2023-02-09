let xhr;
const nombre = document.getElementById('nombre')
const direccion = document.getElementById('direccion')
const telefono = document.getElementById('telefono')
const email = document.getElementById('email')
const resultado = document.getElementById('resultado')
const tabla_vehiculos = document.getElementById('vehiculos')


function getVehiculos() {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const datos = JSON.parse(this.responseText);
            mostrarVehiculos(datos);
            postVehiculos(datos);
        }
    }
    xhr.open('GET', './vehiculos.json');
    xhr.send();
}

function postVehiculos(datos) {
    fetch('./insertar_vehiculos.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
        .then(response => response.text())
        .then(data => resultado.innerHTML = data)
        .catch(err => console.log(err))
}

function mostrarVehiculos(datos) {
    while (tabla_vehiculos.firstElementChild) {
        tabla_vehiculos.removeChild(tabla_vehiculos.firstElementChild);
    }

    tabla_vehiculos.innerHTML = `<tr><th>Id</th><th>Nombre</th><th>Descripción</th><th>Vehicle Class</th><th>Enviar</th></tr>`;

    for (const v of datos) {
        let carRow = document.createElement('tr');
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        carRow.innerHTML = `<td>${v.id}</td><td>${v.name}</td><td>${v.description}</td><td>${v.vehicle_class}</td>`;
        carRow.appendChild(checkbox);
        tabla_vehiculos.appendChild(carRow);
    }
}

function registrarEnvio() {
    const registro = {
        nombre: nombre.value,
        direccion: direccion.value,
        telefono: telefono.value,
        correo: email.value,
        vehiculos: []
    }

    // Seleccionar todas las filas de la tabla
    let filas = document.querySelectorAll('#vehiculos tr');
    for (const f of filas) {
        // Seleccionar el checkbox de cada fila
        let checkbox = f.querySelector('input[type=checkbox]');
        // Si existe y si está checkeado, cogemos el id de esa fila y lo insertamos al array de vehiculos
        if (checkbox && checkbox.checked) {
            let id = f.firstElementChild.innerHTML;
            registro.vehiculos.push(id);
        }
    }

    // Si el array está vacío, mostramos un mensaje y paramos la ejecución del método
    if (registro.vehiculos.length === 0) {
        resultado.innerHTML = 'Por favor, seleccione algún vehículo';
        return;
    }

    fetch('./registrar_envio.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registro)
    })
        .then(response => response.text())
        .then(data => {
            resultado.innerHTML = data;
            limpiarInputs();
        })
        .catch(err => console.log(err))
}

function limpiarInputs() {
    const inputs = document.querySelectorAll('input');

    for (const i of inputs) {
        if (i.type === 'checkbox') {
            i.checked = false;
        } else {
            i.value = '';
        }
    }
}

function iniciar() {
    document.getElementById('carga_vehiculos').addEventListener('click', () => {
        getVehiculos();
    })
    document.getElementById('registrar_envio').addEventListener('click', () => {
        registrarEnvio();
    })
    // document.getElementById('formulario').addEventListener('submit', e => {
    //     e.preventDefault();
    //     registrarEnvio();
    // })
}

window.onload = iniciar;