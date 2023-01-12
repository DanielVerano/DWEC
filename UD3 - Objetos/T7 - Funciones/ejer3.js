function calcularSignoEgipcio(dia, mes) {
    let signo = null;

    if (dia < 0 || dia > 31 || mes < 0 || mes > 12) {
        return;
    }

    if ((mes === 1 && dia >= 16) || (mes === 2 && dia <= 15)) {
        signo = 'bastet';
    } else if ((mes === 2 && dia >= 16) || (mes === 3 && dia <= 15)) {
        signo = 'selket';
    } else if ((mes === 3 && dia >= 16) || (mes === 4 && dia <= 15)) {
        signo = 'apep';
    } else if ((mes === 4 && dia >= 16) || (mes === 5 && dia <= 15)) {
        signo = 'ptah';
    } else if ((mes === 5 && dia >= 16) || (mes === 6 && dia <= 15)) {
        signo = 'atum';
    } else if ((mes === 6 && dia >= 16) || (mes === 7 && dia <= 15)) {
        signo = 'isis';
    } else if ((mes === 7 && dia >= 16) || (mes === 8 && dia <= 15)) {
        signo = 'ra';
    } else if ((mes === 8 && dia >= 16) || (mes === 9 && dia <= 15)) {
        signo = 'horus';
    } else if ((mes === 9 && dia >= 16) || (mes === 10 && dia <= 15)) {
        signo = 'maat';
    } else if ((mes === 10 && dia >= 16) || (mes === 11 && dia <= 15)) {
        signo = 'osiris';
    } else if ((mes === 11 && dia >= 15) || (mes === 12 && dia <= 15)) {
        signo = 'hato';
    } else if ((mes === 12 && dia >= 16) || (mes === 1 && dia <= 16)) {
        signo = 'anubis';
    }
    return signo;
}

function mostrarSigno(signo) {
    switch (signo) {
        case 'bastet':
            signoIframe.src = 'https://es.wikipedia.org/wiki/Bastet';
            break;
        case 'selket':
            signoIframe.src = 'https://es.wikipedia.org/wiki/Selket';
            break;
        case 'apep':
            signoIframe.src = 'https://es.wikipedia.org/wiki/Apofis_(mitolog%C3%ADa)';
            break;
        case 'ptah':
            signoIframe.src = 'https://es.wikipedia.org/wiki/Ptah';
            break;
        case 'atum':
            signoIframe.src = 'https://es.wikipedia.org/wiki/Atum';
            break;
        case 'isis':
            signoIframe.src = 'https://es.wikipedia.org/wiki/Isis';
            break;
        case 'ra':
            signoIframe.src = 'https://es.wikipedia.org/wiki/Ra_(mitolog%C3%ADa)';
            break;
        case 'horus':
            signoIframe.src = 'https://es.wikipedia.org/wiki/Horus';
            break;
        case 'maat':
            signoIframe.src = 'https://es.wikipedia.org/wiki/Maat';
            break;
        case 'osiris':
            signoIframe.src = 'https://es.wikipedia.org/wiki/Osiris';
            break;
        case 'hato':
            signoIframe.src = 'https://es.wikipedia.org/wiki/Hathor';
            break;
        case 'anubis':
            signoIframe.src = 'https://es.wikipedia.org/wiki/Anubis';
            break;
        default:
            break;
    }
}

const signoIframe = document.getElementById('signo');

let fecha = prompt('Introduzca su fecha de nacimiento, en este formato: dd-mm-yyyy');
fecha = fecha.split('-');

const dia = parseInt(fecha[0]);
const mes = parseInt(fecha[1]);
const anio = parseInt(fecha[2]);

const signo = calcularSignoEgipcio(dia, mes);

alert(`Tu signo egipcio es ${signo}`);
mostrarSigno(signo);