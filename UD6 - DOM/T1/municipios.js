// El número de párrafos de la página.
let numParrafos = document.getElementsByTagName('p').length;
console.log(numParrafos);

// El texto del segundo párrafo.
let texto2doP = document.getElementsByTagName('p')[1].textContent;
console.log(texto2doP);

// El número de enlaces de la página.
let numEnlaces = document.getElementsByTagName('a').length;
console.log(numEnlaces);

// La dirección del primer enlace.
let href1erEnlace = document.getElementsByTagName('a')[0].getAttribute('href');
console.log(href1erEnlace);

// La dirección del penúltimo enlace.
let hrefPenEnlace = document.getElementsByTagName('a')[document.getElementsByTagName('a').length - 2].href;
console.log(hrefPenEnlace);

// El número de enlaces que apuntan a /wiki/Municipio
let num = 0;
for (let i = 0; i < document.getElementsByTagName('a').length; i++) {
    let itemHref = document.getElementsByTagName('a')[i].href;
    if (itemHref.match(/\/wiki\/Municipio/)) {
        num++;
    }
}
console.log(num);

// El número de enlaces del primer párrafo.
let numEnlaces1erP = document.getElementsByTagName('p')[0].getElementsByTagName('a').length;
console.log(numEnlaces1erP);

let info = document.getElementById('info');
info.innerHTML = `Número de párrafos de la página: ${numParrafos} <br>
    Texto del segundo párrafo: ${texto2doP} <br>
    Número de enlaces de la página: ${numEnlaces} <br>
    Dirección del primer enlace: ${href1erEnlace} <br>
    Dirección del penúltimo enlace: ${hrefPenEnlace} <br>
    Número de enlaces que apuntan a /wiki/Municipio: ${num} <br>
    Número de enlaces del primer párrafo: ${numEnlaces1erP}`;