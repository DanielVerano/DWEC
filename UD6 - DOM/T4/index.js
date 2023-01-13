function crearInputText() {
    let name = prompt('Introduzca el nombre que tendrá el input', '');

    if (!name) {
        alert('Debe introducir un nombre válido');
        return;
    }

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', name);
    input.setAttribute('id', name);

    let div = wrapElements(input);
    document.getElementById('formulario').appendChild(div);

    // document.getElementById('formulario').appendChild(input);
}

function crearInputPassword() {
    let name = prompt('Introduzca el nombre que tendrá el input', '');

    if (!name) {
        alert('Debe introducir un nombre válido');
        return;
    }

    let input = document.createElement('input');
    input.setAttribute('type', 'password');
    input.setAttribute('name', name);
    input.setAttribute('id', name);

    let div = wrapElements(input);
    document.getElementById('formulario').appendChild(div);

    // document.getElementById('formulario').appendChild(input);
}

function crearTextarea() {
    let name = prompt('Introduzca el nombre que tendrá el textarea', '');

    if (!name) {
        alert('Debe introducir un nombre válido');
        return;
    }

    let textarea = document.createElement('textarea');
    textarea.setAttribute('name', name);
    textarea.setAttribute('cols', 40);
    textarea.setAttribute('rows', 5);

    let div = wrapElements(textarea);
    document.getElementById('formulario').appendChild(div);
    // document.getElementById('formulario').appendChild(textarea);
}

function crearLabel() {
    let name = prompt('Introduzca el nombre al que irá referido el label (atributo for)', '');

    if (!name) {
        alert('Debe introducir un nombre válido');
        return;
    }

    let input = document.getElementById(name);

    if (!input) {
        alert('No existe un input con el nombre introducido');
        return;
    }

    let textoLabel = prompt('Introduzca el texto que tendrá el label', '');

    let label = document.createElement('label');
    label.setAttribute('for', name);
    label.textContent = textoLabel;

    // Insertamos el label en el padre del input referido (div)
    input.parentElement.insertBefore(label, input);
}

function crearImagen() {
    let name = prompt('Introduzca la ruta donde se aloja la imagen', '');

    if (!name) {
        alert('Debe introducir una ruta válida');
        return;
    }

    let imagen = document.createElement('img');
    imagen.setAttribute('src', name);

    let div = wrapElements(imagen);
    document.getElementById('formulario').appendChild(div);

    // document.getElementById('formulario').appendChild(imagen);
}

function crearCheckbox() {
    let name = prompt('Introduzca el nombre del checkbox', '');
    let value = prompt('Introduzca el valor del checkbox', '');
    let text = prompt('Introduzca el texto que acompañará al checkbox', '');

    if (!name || !value) {
        alert('Debe introducir un nombre y valor válidos');
        return;
    }

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', name);
    checkbox.setAttribute('value', value);

    let span = document.createElement('span');
    span.textContent = text;

    let div = wrapElements(checkbox, span);
    document.getElementById('formulario').appendChild(div);

    // document.getElementById('formulario').appendChild(checkbox);
    // document.getElementById('formulario').appendChild(span);
}

function crearRadio() {
    let name = prompt('Introduzca el nombre del radio', '');
    let value = prompt('Introduzca el valor del radio', '');
    let text = prompt('Introduzca el texto que acompañará al radio', '');

    if (!name || !value) {
        alert('Debe introducir un nombre y valor válidos');
        return;
    }

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'radio');
    checkbox.setAttribute('name', name);
    checkbox.setAttribute('value', value);

    let span = document.createElement('span');
    span.textContent = text;

    let div = wrapElements(checkbox, span);
    document.getElementById('formulario').appendChild(div);

    // document.getElementById('formulario').appendChild(checkbox);
    // document.getElementById('formulario').appendChild(span);
}

function crearBotonSubmit() {
    let name = prompt('Introduzca el nombre del botón', '');
    let value = prompt('Introduzca el valor del boton', '');

    if (!name || !value) {
        alert('Debe introducir un nombre y valor válidos');
        return;
    }

    let btn = document.createElement('button');
    btn.setAttribute('type', 'submit');
    btn.setAttribute('name', name);
    btn.textContent = value;

    let div = wrapElements(btn);
    document.getElementById('formulario').appendChild(div);

    // document.getElementById('formulario').appendChild(btn);
}

function wrapElements(...elems) {
    let div = document.createElement('div');

    for (const elem of elems) {
        div.appendChild(elem);
    }

    return div;
}

function iniciar() {
    document.getElementById('crearInputText').addEventListener('click', crearInputText);
    document.getElementById('crearInputPassword').addEventListener('click', crearInputPassword);
    document.getElementById('crearTextarea').addEventListener('click', crearTextarea);
    document.getElementById('crearLabel').addEventListener('click', crearLabel);
    document.getElementById('crearImagen').addEventListener('click', crearImagen);
    document.getElementById('crearCheckbox').addEventListener('click', crearCheckbox);
    document.getElementById('crearRadio').addEventListener('click', crearRadio);
    document.getElementById('crearBotonSubmit').addEventListener('click', crearBotonSubmit);
}

window.onload = iniciar;
