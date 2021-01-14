'use strict'

//var numero1 = parseInt(prompt('ingrese el primer numero'))
//var numero2 = parseInt(prompt('ingrese el segundo numero numero'))

//document.write('<h1>Desde el numero '+numero1 +' al '+numero2+' estan estos numero:</h1>')

/*for(var i=numero1; i<=numero2; i++){
  document.write(i+'<br/>');
}
*/
/*for(var i=numero1; i<=numero2; i++){
    if(i%2!=0){
        document.write(i+'<br/>')
    }
}*/

/*for (var i = numero1; i <= numero2; i++) {
    if (i % 2==0) {

        document.write('<p>el numero' + i + 'es par</p>');  
    }else {
        document.write('<p>el numero' + i + 'es impar</p>');
    }
}*/

var numero = parseInt(prompt('De que numero queres saber la tabla?', 1))
for(var c=1; c<=10; c++){
document.write('<h1>La tabla del ' + c + ' es:</h1>')

for (var i = 1; i <= 10; i++){
    document.write(i+'x'+c+'='+(c*i+'<br/>'))
}}