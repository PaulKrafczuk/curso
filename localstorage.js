'use strict';

//guardar datos
localStorage.setItem("titulo", "curso de JS");

//recuperar elementos
//document.querySelector("#cajas").innerHTML= localStorage.getItem("titulo");

//guardando datos

var usuario={
    nombre:'paul',
    email:'paulkraf@',
    edad:28
}

localStorage.setItem('usuario', JSON.stringify(usuario));