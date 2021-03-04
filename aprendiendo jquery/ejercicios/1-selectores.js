$(document).ready(() => {
    //selector ID
    $('#rojo').css("background", "red").css("color", "white");
    $('#amarillo').css("background", "yellow");
    $('#verde').css("background", "green");

    //selector de clases
    $('.zebra').css('border', '5px dashed black');
    /*$('.sin-clase').click(function(){
        console.log('clic capturado');
        $(this).addClass('zebra');
    })*/

    // selectores de etiqueta
    $('p').click(function () {
        console.log('clic capturado');
        $(this).removeClass("zebra");
    });
});