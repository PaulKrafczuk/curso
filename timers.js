'use strict'

window.addEventListener('load', function () {

    //var intervalo = setInterval(tiempo, 500);



    /* function tiempo() {
         console.log('set interval')
 
         var encabezado = document.querySelector("h1")
 
         if (encabezado.style.background == 'green') {
             encabezado.style.background = 'red';
         } else {
             encabezado.style.background = 'green';
         }
         return tiempo;
     };*/

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
        //alert('Has parado el parpadeo')
        console.log('detiene parpadeo')
        clearInterval(tiempo);
    });

    var start = document.querySelector('#start')

    start.addEventListener('click', function () {
        //alert('Has iniciado el parpadeo');
        console.log('inicio de parpadeo')
        intervalo();
    });


});