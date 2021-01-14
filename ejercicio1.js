// programa que pida dos numeros y devuelva cual es mayor, cual es menor y si son iguales

var numero1 = parseInt(prompt("ingrese un numero"));
var numero2 = parseInt(prompt("ingrese otro numero"));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("ingrese un numero"));
    numero2 = parseInt(prompt("ingrese otro numero"));
}

if (numero1 > numero2) {
    alert(numero1 + " es mayor que " + numero2)
} else if (numero1 < numero2) {
    alert(numero2 + " es mayor que " + numero1)
} else {
    alert('los numeros ingresados son iguales')
}


console.log(typeof numero1)
console.log(typeof numero2)

console.log(numero1)
console.log(numero2)