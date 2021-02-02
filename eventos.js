'use strict'
window.addEventListener('load', () => {

    var boton = document.querySelector('#boton');

    function cambiarColor() {

        console.log("me diste click")
        var bg = boton.style.background;
        if (bg == "green") {
            boton.style.background = "red"
        } else {
            boton.style.background = "green"
        }

        boton.style.border = '1px solid #ccc'
        boton.style.padding = '10px'

        return true;
    }

    //click

    boton.addEventListener('click', function () {
        cambiarColor()
    })

    // mouse over

    boton.addEventListener('mouseover', function () {
        boton.style.background = "pink";
    });

    //mouse out
    boton.addEventListener('mouseout', function () {
        boton.style.background = "blue";
    });

    //focus
    var input = document.querySelector('#campoNombre');

    input.addEventListener('focus', function () {
        console.log('evento focus')
    });

    //blur
    input.addEventListener('blur', function () {
        console.log('evento blur')
    });
    //keydown
    input.addEventListener('keydown', function (event) {
        console.log('evento keydown ' + String.fromCharCode(event.keyCode))
    });
    //key press
    input.addEventListener('keypress', function (event) {
        console.log('tecla presionada ' + String.fromCharCode(event.keyCode))
    });
    // key up

    input.addEventListener('keyup', function (event) {
        console.log('tecla soltada ' + String.fromCharCode(event.keyCode))
    });
}); //end evento load