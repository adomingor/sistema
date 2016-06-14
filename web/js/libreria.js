// $(function () {
//     $("#popMenuUsuario").popover();
// });

//$("#form_fDde").datepicker();

$(document).ready(function(){
    $(document).keyup(function(evento){ // presión de teclas en la página
        if(evento.which==17) // tecla control
        {
            $('#inf_inp_txt_busq-menu').focus();
            $("#slider").slideReveal("toggle");
        }
    });

    /* el input debe tener la clase inf_filtrar oculta los div que tengan label
    con la clase inf_filtrable y que el contenido html no coincidan con lo
    ingresado. El label tiene el mismo name que el input para obtener el grupo
    a filtrar. El label tiene el for igual al id del div a filtrar
    */
    $(".inf_filtrar").keyup(function(evento) {
        var $filtro = this.value.toLowerCase();
        $.each($(".inf_filtrable[name="+this.name+"]"), function (indice, elemento) {
            if (elemento.innerHTML.toLowerCase().indexOf($filtro) > -1)
                $("#"+elemento.htmlFor).show();
            else
                $("#"+elemento.htmlFor).hide();
        });
    });

    // click para desplegar el menu, da foco a input busqueda
    // $("#inf_lnk-muestra-menu").click(function(evento) {
    //     $("#inf_inp_txt_busq-menu").focus();
    // });

    // cuando se utilizan dos fechas para realizar alguna acción
    // $(".input-daterange").datepicker({
    //     format: "dd-mm-yyyy",
    //     startView: 2,
    //     todayBtn: true,
    //     language: "es",
    //     daysOfWeekHighlighted: "0,6",
    //     autoclose: true,
    //     todayHighlight: true,
    //     toggleActive: true
    // });

    $(function () {
      $('[data-toggle="popover"]').popover()
    })

});

$("#slider").slideReveal({
    trigger: $("#inf_lnk-muestra-menu"),
    push: false,
    overlay: true,
    width: 310
});
