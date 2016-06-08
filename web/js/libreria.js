/*$(function () {
    $('#popMenuUsuario').popover();
});*/

//$('#form_fDde').datepicker();

// cuando se utilizan dos fechas para realizar alguna acción
$('.input-daterange').datepicker({
    format: "dd-mm-yyyy",
    startView: 2,
    todayBtn: true,
    language: "es",
    daysOfWeekHighlighted: "0,6",
    autoclose: true,
    todayHighlight: true,
    toggleActive: true
});

$(function () {
    $('[data-toggle="popover"]').popover()
});

$('#slider').slideReveal({
    trigger: $("#trigger")
});
