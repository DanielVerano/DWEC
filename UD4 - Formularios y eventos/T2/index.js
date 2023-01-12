/**
 * 
 * @param {Array} arr 
 */
function shuffle(arr) {
    let j, x, i;
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
}

function elegirImagen(imagen, numero) {
    switch (numero) {
        case 1:
            imagen.setAttribute('src', './img/01_lisa.png');
            break;
        case 2:
            imagen.setAttribute('src', './img/02_bart.png');
            break;
        case 3:
            imagen.setAttribute('src', './img/03_homer.png');
            break;
        case 4:
            imagen.setAttribute('src', './img/04_marge.png');
            break;
        case 5:
            imagen.setAttribute('src', './img/05_maggie.png');
            break;
        case 6:
            imagen.setAttribute('src', './img/06_flanders.png');
            break;
        default:
            break;
    }
}

function iniciar() {
    anadirEventos();
}

function anadirEventos() {
    let tableCells = document.getElementsByTagName('td');

    for (let i = 0; i < tableCells.length; i++) {

        let newImg = document.createElement('img');
        elegirImagen(newImg, posiciones[i]);
        tableCells[i].appendChild(newImg);

        tableCells[i].addEventListener('click', toggleImage);
        tableCells[i].addEventListener('click', checkJuego);
    }

    let imagenes = document.getElementsByTagName('img');

    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].classList.toggle('oculto');
    }
}

function toggleImage(e) {
    if (e.target.tagName === 'TD') {
        let img = e.target.firstElementChild;
        img.classList.toggle('oculto');
    } else if (e.target.tagName === 'IMG') {
        e.target.classList.toggle('oculto');
    }
}

function checkJuego(e) {
    let img = e.target.firstElementChild;
    imgClickeadas++;

    if (img1 === null) {
        img1 = img;
    } else if (img2 === null) {
        img2 = img;
    }

    if (imgClickeadas === 2) {
        imgClickeadas = 0;

        setTimeout(() => {
            if (img1.src === img2.src) {
                imagenesIguales();
            }

            // Toggle la clase oculto a las imágenes
            img1.classList.toggle('oculto');
            img2.classList.toggle('oculto');
            img2 = null;
            img1 = null;
        }, 1000);
    }
}

function imagenesIguales() {
    // Selecciona las celdas de las imágenes
    let img1Cell = img1.parentElement;
    let img2Cell = img2.parentElement;

    // Añade la clase acierto a las celdas
    img1Cell.classList.toggle('acierto');
    img2Cell.classList.toggle('acierto');

    // Borra los eventos toggleImage y checkJuego de las celdas
    img1Cell.removeEventListener('click', toggleImage);
    img1Cell.removeEventListener('click', checkJuego);
    img2Cell.removeEventListener('click', toggleImage);
    img2Cell.removeEventListener('click', checkJuego);
}

const posiciones = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
shuffle(posiciones);

let imgClickeadas = 0;
let img1 = null;
let img2 = null;

window.onload = iniciar;