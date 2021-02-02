'use strict'

var color = prompt('de que color queres el background', 'red')
var caja = document.getElementById('caja');

caja.style.background = color;

caja.innerHTML = "texto desde JavaScript";
console.log(typeof (color));
console.log(caja);

//Conseguir elementos por su etiquetas

var todosLosDiv=document.getElementsByTagName('div');
console.log(todosLosDiv)

var divRojos=document.getElementsByClassName('rojo');
var divAmarillo=document.getElementsByClassName('amarillo');

divAmarillo[0].style.background='yellow'

console.log(divRojos);

//var div;

for(var div in divRojos){
    if(divRojos[div].className == 'rojo'){
divRojos[div].style.background = 'red';

    }
}