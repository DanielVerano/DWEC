const API_URL = 'https://randomuser.me/api/?nat=es';
const usuarioDiv = document.getElementById('usuario');
const usuarioTabla = document.getElementById('tabla_usuarios');
const resultadoDiv = document.getElementById('resultado');
let arrayUsuarios = [];
let usuarioActual;
let xhr;

window.onload = () => {
    document.getElementById('generar_usuario').addEventListener('click', getUsuario);
    document.getElementById('guardar_xhr').addEventListener('click', guardarUsuarios_XHR);
    document.getElementById('guardar_fetch').addEventListener('click', guardarUsuarios_Fetch);
}

function getUsuario() {
    fetch(API_URL)
        .then(response => {
            if (response.ok) return response.json();
        })
        .then(data => {
            let user = {
                image: data.results[0].picture.large,
                name: `${data.results[0].name.first} ${data.results[0].name.last}`,
                street: `${data.results[0].location.street.number} ${data.results[0].location.street.name}`,
                phone: data.results[0].phone,
                email: data.results[0].email
            }
            usuarioActual = user;
            mostrarUsuario(user);
            resultadoDiv.innerHTML += `Nuevo usuario generado<br>`;
        })
        .catch(err => console.log(err))
}

function mostrarUsuario(usuario) {
    usuarioDiv.innerHTML = '';

    let card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
    usuarioDiv.appendChild(card);

    let img = document.createElement('img');
    img.setAttribute('src', usuario.image);
    card.appendChild(img);

    let card_body = document.createElement('div');
    card_body.classList.add('card-body');
    card_body.innerHTML = `
    <h5 class="card-title">${usuario.name}</h5>
    <p class="card-text">Phone: ${usuario.phone}<br>
    Street: ${usuario.street}<br>
    Email: ${usuario.email}</p>`;
    card.appendChild(card_body);

    let botonAnadirTabla = document.createElement('button');
    botonAnadirTabla.innerHTML = 'Add to table';
    botonAnadirTabla.classList.add('btn', 'btn-success');
    botonAnadirTabla.addEventListener('click', anadirUsuarioATabla);
    card_body.appendChild(botonAnadirTabla);
}

function anadirUsuarioATabla() {
    // Si el array de usuarios es 0, crear la tabla, la cabecera y el tbody vacío
    if (arrayUsuarios.length === 0) {
        let tabla = document.createElement('table');
        tabla.classList.add('table', 'table-striped');

        let cabecera = document.createElement('tr');
        cabecera.innerHTML = '<th>Name</th><th>Phone</th><th>Street</th><th>Email</th>';

        tabla.appendChild(cabecera);
        tabla.appendChild(document.createElement('tbody'));
        usuarioTabla.appendChild(tabla);
    }

    let tbody = document.querySelector('#tabla_usuarios table tbody');
    let tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${usuarioActual.name}</td>
    <td>${usuarioActual.phone}</td>
    <td>${usuarioActual.street}</td>
    <td>${usuarioActual.email}</td>`;
    tbody.appendChild(tr);
    arrayUsuarios.push(usuarioActual);
}

function guardarUsuarios_XHR() {
    if (arrayUsuarios.length === 0) {
        resultadoDiv.innerHTML += 'No existen usuarios para guardar en la BD<br>';
        return;
    }

    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let respuesta = JSON.parse(xhr.responseText);
            resultadoDiv.innerHTML += `${respuesta.resultado}<br>`;
        }
    }
    xhr.open('POST', 'save_users.php');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(arrayUsuarios));
}

function guardarUsuarios_Fetch() {
    if (arrayUsuarios.length === 0) {
        resultadoDiv.innerHTML += 'No existen usuarios para guardar en la BD<br>';
        return;
    }

    fetch('save_users.php', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(arrayUsuarios)
    })
        .then(response => {
            if (response.ok) return response.json();
        })
        .then(data => resultadoDiv.innerHTML += `${data.resultado}<br>`)
        .catch(err => console.log(err))
}