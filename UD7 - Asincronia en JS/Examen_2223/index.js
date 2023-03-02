const API_KEY = 'fa879bf730b16f2f0a8283b04e4a80fc';
const TRENDING_MOVIES_URL = "trending/movie/week";
const API_BASE_URL = `https://api.themoviedb.org/3/${TRENDING_MOVIES_URL}?api_key=${API_KEY}`;
let xhr;
let peliculas = [];
let peliculas_favoritas = [];
const trazasDiv = document.getElementById('trazas');
const ficha_peliculas = document.getElementById('ficha_peliculas');


window.onload = () => {
    document.getElementById('carga_peliculas').addEventListener('click', cargarPeliculas);
    document.getElementById('guardar_favoritos').addEventListener('click', guardarFavoritos);
    document.getElementById('obtener_favoritos').addEventListener('click', obtenerFavoritos);
    document.getElementById('limpiar_fichas').addEventListener('click', limpiarFichas);
}

function cargarPeliculas() {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const resultado = JSON.parse(xhr.responseText);
            // console.log(resultado);

            for (const p of resultado.results) {
                let pelicula = {
                    id: p.id,
                    original_title: p.original_title,
                    overview: p.overview,
                    original_language: p.original_language,
                    release_date: p.release_date,
                    vote_average: p.vote_average,
                    poster_path: p.poster_path,
                };
                peliculas.push(pelicula);
            }
            // console.log(peliculas);
            mostrarPeliculas(peliculas);
            trazasDiv.innerHTML += 'Películas cargadas <br>';
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            console.log(xhr.responseText);
        }
    }
    xhr.open('GET', API_BASE_URL);
    xhr.send();
}

function mostrarPeliculas(peliculas) {
    ficha_peliculas.innerHTML = '';

    for (const p of peliculas) {
        generarCard(p);
    }
}

function cambiarCorazon(e) {
    const img = e.target;
    const idPelicula = img.getAttribute('id');
    // const divPadre = img.closest('div.card');

    let src = img.getAttribute('src');

    if (src === './heart_border.png') {
        img.setAttribute('src', './heart_filled.png');

        for (const p of peliculas) {
            if (p.id === Number(idPelicula)) {
                peliculas_favoritas.push(p);
                break;
            }
        }
    } else {
        img.setAttribute('src', "./heart_border.png");
        peliculas_favoritas = peliculas_favoritas.filter(p => p.id !== Number(idPelicula));
    }
    // console.log(peliculas_favoritas);
}

function guardarFavoritos() {
    if (peliculas_favoritas.length === 0) {
        trazasDiv.innerHTML += `No hay películas favoritas para guardar <br>`;
        return;
    }

    fetch('./save_movies.php', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(peliculas_favoritas)
    })
        .then(response => response.json())
        .then(data => trazasDiv.innerHTML += `${data.results} <br>`)
        .catch(err => console.log(err));
}

function obtenerFavoritos() {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const resultado = JSON.parse(xhr.responseText);
            peliculas_favoritas = resultado;
            mostrarPeliculas(peliculas_favoritas);
            trazasDiv.innerHTML += 'Películas favoritas obtenidas de la BD <br>';
            // console.log(peliculas_favoritas);
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            console.log(xhr.responseText);
        }
    }
    xhr.open('GET', './get_favs.php');
    xhr.send();
}

function limpiarFichas() {
    ficha_peliculas.innerHTML = '';
    trazasDiv.innerHTML += 'Ficha de películas limpiadas <br>';
}

function generarCard(pelicula) {
    let card = document.createElement('div');
    card.classList.add('card', 'mb-3');
    card.style.maxWidth = '540px';
    ficha_peliculas.appendChild(card);

    let row = document.createElement('div');
    row.classList.add('row', 'g-0');
    card.appendChild(row);

    let col_img = document.createElement('div');
    col_img.classList.add('col-md-4');
    row.appendChild(col_img);

    let imgPelicula = document.createElement('img');
    imgPelicula.setAttribute('src', `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`);
    imgPelicula.classList.add('img-fluid', 'rounded-start');
    col_img.appendChild(imgPelicula);

    let col_info = document.createElement('div');
    col_info.classList.add('col-md-8');
    row.appendChild(col_info);

    let card_body = document.createElement('div');
    card_body.classList.add('card-body');
    col_info.appendChild(card_body);

    let titulo = document.createElement('h5');
    titulo.classList.add('card-title');
    titulo.innerHTML = `${pelicula.original_title}`;
    card_body.appendChild(titulo);

    let imgCorazon = document.createElement('img');
    imgCorazon.setAttribute('src', "./heart_border.png");
    imgCorazon.setAttribute('id', `${pelicula.id}`);    // Para saber a qué película corresponde cuando pulsamos en un corazón
    imgCorazon.addEventListener('click', cambiarCorazon);
    card_body.appendChild(imgCorazon);

    let sinopsis = document.createElement('p');
    sinopsis.classList.add('card-text');
    sinopsis.innerHTML = `${pelicula.overview}`;
    card_body.appendChild(sinopsis);

    let votos = document.createElement('p');
    votos.classList.add('card-text');
    votos.innerHTML = `${pelicula.vote_average}`;
    card_body.appendChild(votos);

    let fecha_lanzamiento = document.createElement('p');
    fecha_lanzamiento.classList.add('card-text');
    fecha_lanzamiento.innerHTML = `${pelicula.release_date}`;
    card_body.appendChild(fecha_lanzamiento);
}