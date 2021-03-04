'use strict'

window.addEventListener('load', function () {
    console.log('dom cargado')

    var formulario = document.querySelector('#formulario');
    var dashedBox = document.querySelector('.dashed');
    dashedBox.style.display = 'none';

    formulario.addEventListener('submit', function () {
        console.log('evento submit capturado')

        var nombre = document.querySelector('#nombre').value;
        var apellidos = document.querySelector('#apellidos').value;
        var edad = parseInt(document.querySelector('#edad').value);

        //nombre.trim() == null || nombre.trim().lenght == 0

        if (!nombre) {
            alert("nombre invalido");
            console.log('entre al if de nombre')

        }

        if (!apellidos) {
            alert("apellido invalido");
            console.log('entre al if de apellido')

        }

        if (edad>0 || edad == NaN) {
            alert("edad invalida");
            console.log('entre al if de edad')

        }

        dashedBox.style.display = 'block';

        var datosUsuario = [nombre, apellidos, edad];

        var indice;
        for (indice in datosUsuario) {
            var parrafo = document.createElement('p');
            parrafo.append(datosUsuario[indice]);
            dashedBox.append(parrafo);
        }

        /*var parrafo = document.createElement('p');
        parrafo.append(nombre);
        parrafo.append(apellidos);
        parrafo.append(edad);
        dashedBox.append(parrafo);*/

        return false;
    })

});