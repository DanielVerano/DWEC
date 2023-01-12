function reloj() {
    const fecha = new Date();

    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    if (horas < 10) {
        horas = '0' + horas;
    }

    if (minutos < 10) {
        minutos = '0' + minutos;
    }

    if (segundos < 10) {
        segundos = '0' + segundos;
    }

    relojInput.value = `${horas}:${minutos}:${segundos}`;
}

const relojInput = document.getElementById('reloj');
setInterval(reloj, 1000);