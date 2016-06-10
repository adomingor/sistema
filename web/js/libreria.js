/*$(function () {
    $('#popMenuUsuario').popover();
});*/

//$('#form_fDde').datepicker();

$(document).ready(function(){
    /* input con clase inf_filtrar-html oculta los elementos q tengan la clase
    inf_html-filtrable que el contenido html no coincidan con lo ingresado
    */
    $(".inf_filtrar-html").keyup(function(evento) {
        var $filtro = this.value.toLowerCase();
        $.each($(".inf_html-filtrable[name="+this.name+"]"), function (indice, elemento) {
            if (elemento.attributes.value.value.indexOf($filtro) > -1)
                $(elemento).removeClass("isi_ocultar");
            else
                $(elemento).addClass("isi_ocultar");
        });
    });

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

    $('[data-toggle="popover"]').popover();
});

$('#slider').slideReveal({
    trigger: $("#trigger"),
    push: false,
    overlay: true,
    width: 285
});
