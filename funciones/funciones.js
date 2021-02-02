/*function porConsola(numero1, numero2){
    console.log("suma: "+(numero1+numero2));
    console.log("resta: "+(numero1-numero2));
    console.log("multiplicacion: "+(numero1*numero2));
    console.log("division: "+(numero1/numero2));
    return "Hola soy la calculadora";
}

function porPantalla(numero1, numero2){
    document.write("suma: "+(numero1+numero2)+"<br/>");
    document.write("resta: "+(numero1-numero2)+"<br/>");
    document.write("multiplicacion: "+(numero1*numero2)+"<br/>");
    document.write("division: "+(numero1/numero2)+"<br/>");
    document.write("*****************"+"<br/>")
    return "Hola soy la calculadora";
}*/

// REST Y SPREAD

/*function listadoFrutas(fruta1, fruta2, ...restoDeFrutas){
console.log('Fruta 1: '+fruta1);
console.log('Fruta 2: '+fruta2);
console.log(restoDeFrutas);
return 'funcion frutas'
}*/


// ARRAYS
//var nombres = ['paul', 'juan', 'marcelo', 'julio', 'maria', 'susana'];

//console.log(nombres.length)
//console.log(nombres[1])

//document.write("<h1>Nombres de personas</h1>")
//document.write("<ul>")
/*for (var i = 0; i <= nombres.length; i++) {
    document.write('<li>' + nombres[i] + '</li>')
}
document.write("</ul>")*/

/*nombres.forEach((elemento, index, data) => {
    document.write('<li>' + index + " " + elemento + '</li>')
});

var categorias = ['miedo', 'terror', 'suspenso', 'comedia'], peliculas = ['toy story', 'cars', 'up'];

var movies=[categorias,peliculas]

console.log(movies);

peliculas.push('batman');

document.write(movies)*/

var numeros = [];

for (var i = 0; i <= 5; i++) {
    numeros.push(parseInt(prompt('ingrese un numero', 0)));
}
console.log(numeros);
document.write(numeros);

var numerosOrdenados = numeros.sort();

console.log(numerosOrdenados);

var numerosAlReves = numeros.reverse();

console.log(numerosAlReves);

console.log(numeros.length);

// BUESQUEDA

var busqueda = parseInt(prompt('busca un numero',0));
var posicion = numeros.findIndex(numero=> numero ==busqueda);

if(posicion!=-1){
document.write('<h1>ENCONTRADO</h1>');
document.write('<h1>LA POSICION ES: '+posicion+'</h1>');
}else{
    document.write('<h1>NO ENCONTRADO</h1>'); 
}