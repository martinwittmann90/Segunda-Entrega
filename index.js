(function(original) {
    parseInt = function() {
        return original.apply(window, arguments) || 0;
    };
})(parseInt);


$(document).on('ready', constructor);
function constructor()
{
  $('#contenido input:not([readonly])').change( function (e) {
    let id = $(this).data('id'); 
    if(!id) return; 
    let num1 = parseInt( $('#EQUIPOLOCAL'+id).val() );
    let num2 = parseInt( $('#EQUIPOVISITANTE'+id).val() );
    if (num1 > num2) {
    local = 3;
    visitante = 0;}
    else if (num1 < num2) {
    local = 0;
    visitante = 3;
      }
      else {
      local = 1;
      visitante = 1;
      }
    let resultadolocal = local
    $('#teamlocal'+id).val(resultadolocal);
    let resultadovisitante = visitante
    $('#teamvisita'+id).val(resultadovisitante);

    //CALCULO PUNTOS GRUPO A
    ptosqat.innerText = parseInt(teamlocal1.value) + parseInt(teamlocal3.value) + parseInt(teamvisita6.value) 
    ptosecu.innerText = parseInt(teamvisita1.value) + parseInt(teamvisita4.value) + parseInt(teamlocal5.value)
    ptossen.innerText = parseInt(teamlocal2.value) + parseInt(teamvisita3.value) + parseInt(teamvisita5.value)
    ptospbj.innerText = parseInt(teamvisita2.value) + parseInt(teamlocal4.value) + parseInt(teamlocal6.value)
    //CALCULO GOLES A FAVOR GRUPO A
    golesqat.innerText = parseInt(EQUIPOLOCAL1.value) + parseInt(EQUIPOLOCAL3.value) + parseInt(EQUIPOVISITANTE6.value)
    golesecu.innerText = parseInt(EQUIPOVISITANTE1.value) + parseInt(EQUIPOVISITANTE4.value) + parseInt(EQUIPOLOCAL5.value)
    golessen.innerText = parseInt(EQUIPOLOCAL2.value) + parseInt(EQUIPOVISITANTE3.value) + parseInt(EQUIPOLOCAL5.value)
    golespbj.innerText = parseInt(EQUIPOVISITANTE2.value) + parseInt(EQUIPOLOCAL4.value) + parseInt(EQUIPOLOCAL6.value)
    //CALCULO GOLES EN CONTRA GRUPO A
    golesconqat.innerText = parseInt(EQUIPOVISITANTE1.value) + parseInt(EQUIPOVISITANTE3.value) + parseInt(EQUIPOLOCAL6.value)
    golesconecu.innerText = parseInt(EQUIPOLOCAL1.value) + parseInt(EQUIPOLOCAL4.value) + parseInt(EQUIPOVISITANTE5.value)
    golesconsen.innerText = parseInt(EQUIPOVISITANTE2.value) + parseInt(EQUIPOLOCAL3.value) + parseInt(EQUIPOLOCAL5.value)
    golesconpbj.innerText = parseInt(EQUIPOLOCAL2.value) + parseInt(EQUIPOVISITANTE4.value) + parseInt(EQUIPOLOCAL6.value)
    //DIFERENCIA GOLES GRUPO A
    difgolqat.innerText = parseInt(golesqat.innerText) - parseInt(golesconqat.innerText)
    difgolecu.innerText = parseInt(golesecu.innerText) - parseInt(golesconecu.innerText)
    difgolsen.innerText = parseInt(golessen.innerText) - parseInt(golesconsen.innerText)
    difgolpbj.innerText = parseInt(golespbj.innerText) - parseInt(golesconpbj.innerText) 
    //CALCULO PUNTOS GRUPO B
    ptosing.innerText = parseInt(teamlocal7.value) + parseInt(teamvisita10.value) + parseInt(teamvisita11.value) 
    ptosira.innerText = parseInt(teamvisita7.value) + parseInt(teamvisita9.value) + parseInt(teamlocal12.value)
    ptosgal.innerText = parseInt(teamvisita8.value) + parseInt(teamlocal9.value) + parseInt(teamlocal11.value)
    ptosusa.innerText = parseInt(teamlocal8.value) + parseInt(teamlocal10.value) + parseInt(teamvisita12.value)
    //CALCULO GOLES A FAVOR GRUPO B
    golesing.innerText = parseInt(EQUIPOLOCAL7.value) + parseInt(EQUIPOVISITANTE10.value) + parseInt(EQUIPOVISITANTE11.value)
    golesira.innerText = parseInt(EQUIPOVISITANTE7.value) + parseInt(EQUIPOVISITANTE9.value) + parseInt(EQUIPOLOCAL12.value)
    golesgal.innerText = parseInt(EQUIPOVISITANTE8.value) + parseInt(EQUIPOLOCAL9.value) + parseInt(EQUIPOLOCAL11.value)
    golesusa.innerText = parseInt(EQUIPOLOCAL8.value) + parseInt(EQUIPOLOCAL10.value) + parseInt(EQUIPOVISITANTE12.value)
    //CALCULO GOLES EN CONTRA GRUPO B
    golesconing.innerText = parseInt(EQUIPOVISITANTE7.value) + parseInt(EQUIPOLOCAL10.value) + parseInt(EQUIPOLOCAL11.value)
    golesconira.innerText = parseInt(EQUIPOLOCAL7.value) + parseInt(EQUIPOLOCAL9.value) + parseInt(EQUIPOVISITANTE12.value)
    golescongal.innerText = parseInt(EQUIPOLOCAL8.value) + parseInt(EQUIPOVISITANTE9.value) + parseInt(EQUIPOVISITANTE11.value)
    golesconusa.innerText = parseInt(EQUIPOVISITANTE8.value) + parseInt(EQUIPOVISITANTE10.value) + parseInt(EQUIPOLOCAL12.value)
    //DIFERENCIA GOLES GRUPO B
    difgoling.innerText = parseInt(golesing.innerText) - parseInt(golesconing.innerText)
    difgolira.innerText = parseInt(golesira.innerText) - parseInt(golesconira.innerText)
    difgolgal.innerText = parseInt(golesgal.innerText) - parseInt(golescongal.innerText)
    difgolusa.innerText = parseInt(golesusa.innerText) - parseInt(golesconusa.innerText)

        //CALCULO PUNTOS GRUPO C
        ptosarg.innerText = parseInt(teamlocal13.value) + parseInt(teamlocal15.value) + parseInt(teamlocal17.value) 
        ptosars.innerText = parseInt(teamvisita13.value) + parseInt(teamlocal16.value) + parseInt(teamvisita18.value)
        ptosmex.innerText = parseInt(teamlocal14.value) + parseInt(teamvisita15.value) + parseInt(teamlocal18.value)
        ptospol.innerText = parseInt(teamvisita14.value) + parseInt(teamvisita16.value) + parseInt(teamvisita17.value)
        //CALCULO GOLES A FAVOR GRUPO C
        golesarg.innerText = parseInt(EQUIPOLOCAL13.value) + parseInt(EQUIPOLOCAL15.value) + parseInt(EQUIPOLOCAL17.value)
        golesars.innerText = parseInt(EQUIPOVISITANTE13.value) + parseInt(EQUIPOLOCAL16.value) + parseInt(EQUIPOVISITANTE18.value)
        golesmex.innerText = parseInt(EQUIPOLOCAL14.value) + parseInt(EQUIPOVISITANTE15.value) + parseInt(EQUIPOLOCAL18.value)
        golespol.innerText = parseInt(EQUIPOVISITANTE14.value) + parseInt(EQUIPOVISITANTE16.value) + parseInt(EQUIPOVISITANTE17.value)
        //CALCULO GOLES EN CONTRA GRUPO C
        golesconarg.innerText = parseInt(EQUIPOVISITANTE13.value) + parseInt(EQUIPOVISITANTE15.value) + parseInt(EQUIPOVISITANTE17.value)
        golesconars.innerText = parseInt(EQUIPOLOCAL13.value) + parseInt(EQUIPOVISITANTE16.value) + parseInt(EQUIPOLOCAL18.value)
        golesconmex.innerText = parseInt(EQUIPOVISITANTE14.value) + parseInt(EQUIPOLOCAL15.value) + parseInt(EQUIPOVISITANTE18.value)
        golesconpol.innerText = parseInt(EQUIPOLOCAL14.value) + parseInt(EQUIPOLOCAL16.value) + parseInt(EQUIPOLOCAL17.value)
        //DIFERENCIA GOLES GRUPO C
        difgolarg.innerText = parseInt(golesarg.innerText) - parseInt(golesconarg.innerText)
        difgolars.innerText = parseInt(golesars.innerText) - parseInt(golesconars.innerText)
        difgolmex.innerText = parseInt(golesmex.innerText) - parseInt(golesconmex.innerText)
        difgolpol.innerText = parseInt(golespol.innerText) - parseInt(golesconpol.innerText)

        //CALCULO PUNTOS GRUPO D
        ptosfra.innerText = parseInt(teamlocal19.value) + parseInt(teamlocal22.value) + parseInt(teamvisita24.value) 
        ptosaus.innerText = parseInt(teamvisita19.value) + parseInt(teamvisita21.value) + parseInt(teamlocal23.value)
        ptosdin.innerText = parseInt(teamlocal20.value) + parseInt(teamvisita22.value) + parseInt(teamvisita23.value)
        ptostun.innerText = parseInt(teamvisita20.value) + parseInt(teamlocal21.value) + parseInt(teamlocal24.value)
        //CALCULO GOLES A FAVOR GRUPO D
        golesfra.innerText = parseInt(EQUIPOLOCAL19.value) + parseInt(EQUIPOLOCAL22.value) + parseInt(EQUIPOVISITANTE24.value)
        golesaus.innerText = parseInt(EQUIPOVISITANTE19.value) + parseInt(EQUIPOVISITANTE21.value) + parseInt(EQUIPOLOCAL23.value)
        golesdin.innerText = parseInt(EQUIPOLOCAL20.value) + parseInt(EQUIPOVISITANTE22.value) + parseInt(EQUIPOVISITANTE23.value)
        golestun.innerText = parseInt(EQUIPOVISITANTE20.value) + parseInt(EQUIPOLOCAL21.value) + parseInt(EQUIPOLOCAL24.value)
        //CALCULO GOLES EN CONTRA GRUPO D
        golesconfra.innerText = parseInt(EQUIPOVISITANTE19.value) + parseInt(EQUIPOVISITANTE22.value) + parseInt(EQUIPOLOCAL24.value)
        golesconaus.innerText = parseInt(EQUIPOLOCAL19.value) + parseInt(EQUIPOLOCAL21.value) + parseInt(EQUIPOVISITANTE23.value)
        golescondin.innerText = parseInt(EQUIPOVISITANTE20.value) + parseInt(EQUIPOLOCAL22.value) + parseInt(EQUIPOLOCAL23.value)
        golescontun.innerText = parseInt(EQUIPOLOCAL20.value) + parseInt(EQUIPOVISITANTE21.value) + parseInt(EQUIPOVISITANTE24.value)
        //DIFERENCIA GOLES GRUPO D
        difgolfra.innerText = parseInt(golesfra.innerText) - parseInt(golesconfra.innerText)
        difgolaus.innerText = parseInt(golesaus.innerText) - parseInt(golesconaus.innerText)
        difgoldin.innerText = parseInt(golesdin.innerText) - parseInt(golescondin.innerText)
        difgoltun.innerText = parseInt(golestun.innerText) - parseInt(golescontun.innerText)   

        localStorage.setItem('bienvenida', '¡Hola!');
        localStorage.setItem('esValido', true);
        localStorage.setItem('unNumero', 20);
        let mensaje =  localStorage.getItem('bienvenida');
        let bandera =  localStorage.getItem('esValido');
        let numero  =  localStorage.getItem('unNumero');
        
        console.log(mensaje); // ‘¡Hola Coder!’
        console.log(bandera); // ‘true’
        console.log(numero);  // ‘20’
        
        
        
          let boton = document.getElementById("btn");
          boton.addEventListener("click", () => {
            localStorage.clear();
            alert("Carrito eliminado");
          })
          


parseInt('') === 0 
  });} 


  function guardarDatos() {
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.password = document.getElementById("password").value;
}

function recuperarDatos() {
    if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + " Password: " + localStorage.password;
    } else {
        document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
    }
}