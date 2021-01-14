var edad1 = 30; edad2 = 20;

if (edad1 > edad2) {
    console.log("haceme un pete")
} else {
    console.log('no me hagas un pete')
}

var exito = 'todo bien capo', fail = 'malardo bro'
/*
and &&
or ||
negacion!
*/

if (edad1 < 20 || edad2 == 50) {
    console.log(exito)
} else {
    console.log(fail)
}


var ano = '2018'

if (ano === 2018) {
    console.log(exito)
} else {
    console.log(fail)
}

var imprime = ''; edad = 80;

switch (edad) {
    case 20:
        imprime = 'tenes 20'
        break;
    case 50:
        imprime = 'alto viejardo'
        break;
    default:
        imprime = 'no tenes 20'
}

console.log(imprime);