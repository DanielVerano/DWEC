window.onload = cargarFormulario;

function cargarFormulario() {
    let form = document.createElement('form');
    form.setAttribute('action', '/');

    //  Input nombre
    let inputNombre = document.createElement('input');
    inputNombre.setAttribute('type', 'text');
    inputNombre.setAttribute('name', 'nombre');
    inputNombre.setAttribute('id', 'nombre');

    // Label nombre
    let labelNombre = document.createElement('label');
    labelNombre.setAttribute('for', 'nombre');
    labelNombre.textContent = 'Nombre del disco:';

    // Input grupo
    let inputGrupo = document.createElement('input');
    inputGrupo.setAttribute('type', 'text');
    inputGrupo.setAttribute('name', 'grupo');
    inputGrupo.setAttribute('id', 'grupo');

    // Label grupo
    let labelGrupo = document.createElement('label');
    labelGrupo.setAttribute('for', 'grupo');
    labelGrupo.textContent = 'Grupo de música o cantante:';

    // Input año
    let inputAnio = document.createElement('input');
    inputAnio.setAttribute('type', 'number');
    inputAnio.setAttribute('name', 'anio');
    inputAnio.setAttribute('id', 'anio');

    // Label año
    let labelAnio = document.createElement('label');
    labelAnio.setAttribute('for', 'anio');
    labelAnio.textContent = 'Año de publicación:';

    // Select tipo
    let selectTipo = document.createElement('select');
    selectTipo.setAttribute('name', 'tipo');
    selectTipo.setAttribute('id', 'tipo');

    // Opciones select
    let opcion1 = document.createElement('option');
    opcion1.setAttribute('value', 'tipo1');
    opcion1.textContent = 'Rock';

    let opcion2 = document.createElement('option');
    opcion2.setAttribute('value', 'tipo2');
    opcion2.textContent = 'Pop';

    let opcion3 = document.createElement('option');
    opcion3.setAttribute('value', 'tipo3');
    opcion3.textContent = 'Punk';

    let opcion4 = document.createElement('option');
    opcion4.setAttribute('value', 'tipo4');
    opcion4.textContent = 'Indie';

    selectTipo.appendChild(opcion1);
    selectTipo.appendChild(opcion2);
    selectTipo.appendChild(opcion3);
    selectTipo.appendChild(opcion4);

    // Label tipo
    let labelTipo = document.createElement('label');
    labelTipo.setAttribute('for', 'tipo');
    labelTipo.textContent = 'Tipo de música:';

    // Input localización
    let inputLocalizacion = document.createElement('input');
    inputLocalizacion.setAttribute('type', 'number');
    inputLocalizacion.setAttribute('name', 'localizacion');
    inputLocalizacion.setAttribute('id', 'localizacion');

    // Label localización
    let labelLocalizacion = document.createElement('label');
    labelLocalizacion.setAttribute('for', 'localizacion');
    labelLocalizacion.textContent = 'Localización:';

    // Input prestado
    let inputPrestado = document.createElement('input');
    inputPrestado.setAttribute('type', 'checkbox');
    inputPrestado.setAttribute('name', 'prestado');
    inputPrestado.setAttribute('id', 'prestado');

    // Label prestado
    let labelPrestado = document.createElement('label');
    labelPrestado.setAttribute('for', 'prestado');
    labelPrestado.textContent = 'Prestado:';

    // Botón de enviar
    let btnEnviar = document.createElement('button');
    btnEnviar.setAttribute('type', 'submit');
    btnEnviar.textContent = 'Enviar formulario';

    // Insertar los inputs
    form.appendChild(inputNombre);
    form.appendChild(inputGrupo);
    form.appendChild(inputAnio);
    form.appendChild(selectTipo);
    form.appendChild(inputLocalizacion);
    form.appendChild(inputPrestado);

    // Insertar los label
    form.insertBefore(labelNombre, inputNombre);
    form.insertBefore(labelGrupo, inputGrupo);
    form.insertBefore(labelAnio, inputAnio);
    form.insertBefore(labelTipo, selectTipo);
    form.insertBefore(labelLocalizacion, inputLocalizacion);
    form.insertBefore(labelPrestado, inputPrestado);

    form.appendChild(btnEnviar);
    document.body.appendChild(form);
}