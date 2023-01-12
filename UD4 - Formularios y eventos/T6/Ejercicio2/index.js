window.onload = iniciar;

function iniciar() {
    // mostrarMensaje();
    const opcionesPrimeraPregunta = document.getElementsByName('pregunta1');
    const opcionesSegundaPregunta = document.getElementsByName('pregunta2');
    const opcionesTerceraPregunta = document.getElementsByName('pregunta3');

    const preguntaCorrecta1 = 2;
    const preguntaCorrecta2 = 3;
    const preguntaCorrecta3 = 2;

    let pregunta1Eleccion, pregunta2Eleccion, pregunta3Eleccion;
}

function mostrarMensaje() {
    alert('Bienvenido al test de conocimientos matemáticos\nSeleccione las respuestas que crea correctas teniendo en cuenta las siguientes consideraciones:\n1.- Los aciertos tienen puntuaciones variables en función de la dificultad de la pregunta.\n2.- Las preguntas no contestadas ni suman ni restan puntos.\n3.- Las respuestas equivocadas restan más o menos puntos en función del tipo de fallo.\nNOTA:\nEl test que va a realizar a continuación carece de rigor \'científico\'. Únicamente\nse utiliza para mostrar una posibilidad más de la programación en JavaScript.\nGRACIAS');
}