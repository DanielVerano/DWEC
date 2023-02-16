let personajes = [];
const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const resultadoDiv = document.getElementById('resultado');
const personajesSelect = document.getElementById('personajes');
const fichaPersonajes = document.getElementById('ficha');

window.onload = () => {
    document.getElementById('get_xhr').addEventListener('click', getPersonajes_xhr);
    document.getElementById('get_fetch').addEventListener('click', getPersonajes_fetch);
    document.getElementById('get_y_post_episodios').addEventListener('click', getEpisodio);
}

function getPersonajes_xhr() {
    personajes = [];
    let minimo = +minInput.value;
    let maximo = +maxInput.value;
    if (minimo > maximo) {
        resultadoDiv.innerHTML += 'El valor mínimo no puede ser superior al máximo<br>';
        return;
    }

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let personaje = JSON.parse(xhr.responseText);
            personajes.push(personaje);
            resultadoDiv.innerHTML += `Personaje ${personaje.name} cargado<br>`;

            minimo++;
            if (minimo <= maximo) {
                xhr.open('GET', `https://rickandmortyapi.com/api/character/${minimo}`);
                xhr.send();
            } else {
                generarFicha(personajes);
                generarSelect(personajes);
            }
        }
    }
    xhr.open('GET', `https://rickandmortyapi.com/api/character/${minimo}`);
    xhr.send();
}

function getPersonajes_fetch() {
    personajes = [];
    let fetches = [];
    let minimo = +minInput.value;
    let maximo = +maxInput.value;
    if (minimo > maximo) {
        resultadoDiv.innerHTML += 'El valor mínimo no puede ser superior al máximo<br>';
        return;
    }

    for (let i = minimo; i <= maximo; i++) {
        fetches.push(
            fetch(`https://rickandmortyapi.com/api/character/${i}`)
                .then(response => response.json())
                .then(personaje => {
                    personajes.push(personaje);
                    resultadoDiv.innerHTML += `Personaje ${personaje.name} cargado<br>`;
                })
                .catch(err => console.log(err)));
    }
    Promise.all(fetches)
        .then(() => {
            generarFicha(personajes);
            generarSelect(personajes);
        })
        .catch(err => console.log(err));
}

function getEpisodio() {
    let personajeSeleccionado = null;

    // Coger el personaje elegido del select
    for (const p of personajes) {
        if (Number(personajesSelect.value) === p.id) {
            personajeSeleccionado = p;
            break;
        }
    }

    if (personajeSeleccionado === null) return;

    for (const ep of personajeSeleccionado.episode) {
        fetch(ep)
            .then(response => response.json())
            .then(episodio => postEpisodio(episodio))
            .catch(err => console.log(err));
    }
}

function postEpisodio(episodio) {
    fetch('./guardar_episodio_rm.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(episodio)
    })
        .then(response => response.json())
        .then(datos => resultadoDiv.innerHTML += `${datos.resultado}<br>`);
}

function generarFicha(personajes) {
    fichaPersonajes.innerHTML = '';
    for (const p of personajes) {
        fichaPersonajes.innerHTML += `<img src="${p.image}"><br><b>${p.name}</b><br>${p.species}<br>${p.location.name}<br>${p.created}<br><hr>`;
    }
}

function generarSelect(personajes) {
    personajesSelect.innerHTML = '';
    for (const p of personajes) {
        let opt = document.createElement('option');
        opt.setAttribute('value', p.id);
        opt.innerHTML = p.name;
        personajesSelect.appendChild(opt);
    }
}