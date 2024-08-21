//$(document).ready(function() {
    //$(".text-body-secondary").click(function() {
      //var idBoton = $("#Rio").attr("id"); ERROR ACÁ, SÓLO LLAMA AL ID RIO
      //$("#detalles" + idBoton).toggle(); SIGUE LLAMANDO AL ID RIO
    //});


    //$(".btn-close").click(function() {
        //$(".detalles").show(); SIGUE LLAMANDO AL PRESIONAR EL BOTON, NO CIERRA
    //});
  //});

  $(document).ready(function() {
    $(".text-body-secondary").click(function() {
      var idBoton = $(this).attr("id"); //(this) LLAMA SEGÚN EL CLICK
      $("#detalles" + idBoton).toggle(); //CONCATENA EN EL MODO CORRECTO SEGÚN EL CLICK
    });
  
    $(".btn-close").click(function() {
      $(".detalles").hide(); //.hide ACÁ ESCONDE LA IMAGEN
    });
  });
  