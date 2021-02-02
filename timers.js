'use strict'
function intervalo() {
    var tiempo = setInterval(() => {
        console.log('set interval')

        var encabezado = document.querySelector("h1")

        if (encabezado.style.background == 'green') {
            encabezado.style.background = 'red';
        } else {
            encabezado.style.background = 'green';
        }

    }, 500)

    return tiempo;
};

var tiempo = intervalo();

var stop = document.querySelector('#stop');

stop.addEventListener('click', function () {
    alert('Has parado el parpadeo')
    clearInterval(tiempo);
});

var start = document.querySelector('#start')

start.addEventListener('click', () => {
alert('Has iniciado el parpadeo');
    intervalo();
});