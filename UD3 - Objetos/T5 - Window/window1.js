function abrirNuevaVentana() {
    const ans = confirm('Desea abrir una nueva ventana?');
    if (ans) {
        let newWindow = open('./window2.html', 'ventana2', "toolbar=0,location=0,menubar=0,resizable=0,width=200,height=80");
        newWindow.moveTo(500, 500);
    }
}

function cerrarNuevaVentana() {
    let newWindow = open('', 'ventana2');

    if (newWindow) {
        newWindow.close();
    } else {
        alert('La ventana no existe o ya ha sido cerrada');
    }
}

function moverVentana() {
    let newWindow = open('', 'ventana2');

    newWindow.moveBy(10, 10);
}

function moverVentanaPosicion() {
    let newWindow = open('', 'ventana2');

    newWindow.moveTo(100, 100);
}

function aumentarTamano() {
    let newWindow = open('', 'ventana2');

    newWindow.resizeTo(400, 200);
}

function colocarScrollArriba() {
    let newWindow = open('', 'ventana2');

    newWindow.scrollTo(0, 0);
}

function colocarScroll10Pixeles() {
    let newWindow = open('', 'ventana2');

    newWindow.scrollTo(0, 10);
}