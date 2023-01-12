function insertarTexto() {
    let texto = prompt('Introduzca la cadena a insertar en la lista', '');
    let lista = document.getElementById('lista');

    if (texto) {
        let li = document.createElement('li');
        li.textContent = texto;
        lista.appendChild(li);
    }
}

function borrarPrimerLi() {
    let lista = document.getElementById('lista');
    let li = lista.getElementsByTagName('li');

    if (li.length != 0) {
        lista.removeChild(li.item(0))
    }
}

function borrarUltimoLi() {
    let lista = document.getElementById('lista');
    let li = lista.getElementsByTagName('li');

    if (li.length != 0) {
        lista.removeChild(li.item(li.length - 1));
    }
}

document.getElementById('insertarTexto').addEventListener('click', insertarTexto);
document.getElementById('borrarPrimero').addEventListener('click', borrarPrimerLi);
document.getElementById('borrarUltimo').addEventListener('click', borrarUltimoLi);
