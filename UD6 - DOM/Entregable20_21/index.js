function iniciar() {
    document.getElementById('generar').addEventListener('click', generarTabla);
}

function generarTabla() {
    const colsInput = document.getElementById('cols');
    const rowsInput = document.getElementById('rows');
    const headersCheckbox = document.getElementById('headers');
    const defValueInput = document.getElementById('defaultValue');
    const grosorInput = document.getElementById('grosor');
    const colorSelect = document.getElementById('color');
    const tablaDiv = document.getElementById('tabla');

    const cols = colsInput.value;
    const rows = rowsInput.value;
    let defaultValue = defValueInput.value;
    let grosor = grosorInput.value;
    const color = colorSelect.value;
    let headers = "";

    if (!cols || !rows) {
        alert('Debe introducir un número de filas y columnas');
        return;
    }

    // Check DefaultValue
    defaultValue = !defaultValue ? "Valor por defecto" : defaultValue;

    // Check grosor
    grosor = !grosor ? 1 : Number(grosor);

    // Check headers
    if (headersCheckbox.checked) {
        for (let j = 0; j < cols; j++) {
            headers += prompt(`Introduzca el header para la ${j + 1} columna:`);
            headers += " ";
        }
    }

    // Eliminar la tabla si ya existe
    while (tablaDiv.hasChildNodes()) {
        tablaDiv.removeChild(tablaDiv.firstChild);
    }

    const tabla = document.createElement('table');
    tabla.style.border = `${grosor}px solid ${color}`;
    tabla.style.borderCollapse = "collapse";

    if (headers) {
        const headersRow = document.createElement('tr');
        headers = headers.split(" ");

        for (let i = 0; i < cols; i++) {
            let header = document.createElement('th');
            header.textContent = headers[i];
            header.style.border = `${grosor}px solid ${color}`;
            headersRow.appendChild(header);
        }

        tabla.appendChild(headersRow);
    }

    for (let i = 0; i < rows; i++) {
        let row = document.createElement('tr');

        for (let j = 0; j < cols; j++) {
            let col = document.createElement('td');
            col.textContent = defaultValue;
            col.style.border = `${grosor}px solid ${color}`;
            row.appendChild(col);
        }
        tabla.appendChild(row);
    }

    tablaDiv.appendChild(tabla);
}

window.onload = iniciar;