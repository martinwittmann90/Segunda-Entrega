//RESULTADOS DEL USUARIO
const guardarResultado1 = document.getElementById("equipoLocal1");
const guardarResultado2 = document.getElementById("equipoVisitante1");
const guardarResultado3 = document.getElementById("equipoLocal2");
const guardarResultado4 = document.getElementById("equipoVisitante2");
const guardarResultado5 = document.getElementById("equipoLocal3");
const guardarResultado6 = document.getElementById("equipoVisitante3");
const guardarResultado7 = document.getElementById("equipoLocal4");
const guardarResultado8 = document.getElementById("equipoVisitante4");
const guardarResultado9 = document.getElementById("equipoLocal5");
const guardarResultado10 = document.getElementById("equipoVisitante5");
const guardarResultado11 = document.getElementById("equipoLocal6");
const guardarResultado12 = document.getElementById("equipoVisitante6");
const guardarResultado13 = document.getElementById("equipoLocal7");
const guardarResultado14 = document.getElementById("equipoVisitante7");
const guardarResultado15 = document.getElementById("equipoLocal8");
const guardarResultado16 = document.getElementById("equipoVisitante8");
const guardarResultado17 = document.getElementById("equipoLocal9");
const guardarResultado18 = document.getElementById("equipoVisitante9");
const guardarResultado19 = document.getElementById("equipoLocal10");
const guardarResultado20 = document.getElementById("equipoVisitante10");
const guardarResultado21 = document.getElementById("equipoLocal11");
const guardarResultado22 = document.getElementById("equipoVisitante11");
const guardarResultado23 = document.getElementById("equipoLocal12");
const guardarResultado24 = document.getElementById("equipoVisitante12");
const guardarResultado25 = document.getElementById("equipoLocal13");
const guardarResultado26 = document.getElementById("equipoVisitante13");
const guardarResultado27 = document.getElementById("equipoLocal14");
const guardarResultado28 = document.getElementById("equipoVisitante14");
const guardarResultado29 = document.getElementById("equipoLocal15");
const guardarResultado30 = document.getElementById("equipoVisitante15");
const guardarResultado31 = document.getElementById("equipoLocal16");
const guardarResultado32 = document.getElementById("equipoVisitante16");
const guardarResultado33 = document.getElementById("equipoLocal17");
const guardarResultado34 = document.getElementById("equipoVisitante17");
const guardarResultado35 = document.getElementById("equipoLocal8");
const guardarResultado36 = document.getElementById("equipoVisitante18"); 


const btnResultado = document.querySelector("#enviar");

btnResultado.addEventListener("click", function () {
  localStorage.setItem("name", getName.value);
  localStorage.setItem("Qatar 1", guardarResultado1.value)
  localStorage.setItem("Ecuador 1", guardarResultado2.value)
  localStorage.setItem("Senegal 1", guardarResultado3.value)
  localStorage.setItem("Paises Bajos 1", guardarResultado4.value)
  localStorage.setItem("Qatar 2", guardarResultado5.value)
  localStorage.setItem("Senegal 2", guardarResultado6.value)
  ;}
  ); 


const rememberMe = document.querySelector(".remember");
const forgetMe = document.querySelector(".forget");
const form1 = document.querySelector("form");
const getName = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const h1 = document.querySelector("h1");
form1.addEventListener("submit", function (e) {
  e.preventDefault();
});
submitBtn.addEventListener("click", function () {
  localStorage.setItem("name", getName.value);
  nameDisplayCheck();
});
forgetBtn.addEventListener("click", function () {
  localStorage.removeItem("name");
  nameDisplayCheck();
});
function nameDisplayCheck() {
  if (localStorage.getItem("name")) {
    let name = localStorage.getItem("name");
    h1.textContent = `Bienvenido ${name}!`
    forgetMe.style.display = "block";
    rememberMe.style.display = "none";
  } else {
    h1.textContent = `Simulador del mundial`;
    forgetMe.style.display = "none";
    rememberMe.style.display = "block";}}
document.body.onload = nameDisplayCheck; 

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
    let num1 = parseInt( $('#equipoLocal'+id).val() );
    let num2 = parseInt( $('#equipoVisitante'+id).val() );
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
    golesqat.innerText = parseInt(equipoLocal1.value) + parseInt(equipoLocal3.value) + parseInt(equipoVisitante6.value)
    golesecu.innerText = parseInt(equipoVisitante1.value) + parseInt(equipoVisitante4.value) + parseInt(equipoLocal5.value)
    golessen.innerText = parseInt(equipoLocal2.value) + parseInt(equipoVisitante3.value) + parseInt(equipoVisitante5.value)
    golespbj.innerText = parseInt(equipoVisitante2.value) + parseInt(equipoLocal4.value) + parseInt(equipoLocal6.value)
    //CALCULO GOLES EN CONTRA GRUPO A
    golesconqat.innerText = parseInt(equipoVisitante1.value) + parseInt(equipoVisitante3.value) + parseInt(equipoLocal6.value)
    golesconecu.innerText = parseInt(equipoLocal1.value) + parseInt(equipoLocal4.value) + parseInt(equipoVisitante5.value)
    golesconsen.innerText = parseInt(equipoVisitante2.value) + parseInt(equipoLocal3.value) + parseInt(equipoLocal5.value)
    golesconpbj.innerText = parseInt(equipoLocal2.value) + parseInt(equipoVisitante4.value) + parseInt(equipoVisitante6.value)
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
    golesing.innerText = parseInt(equipoLocal7.value) + parseInt(equipoVisitante10.value) + parseInt(equipoVisitante11.value)
    golesira.innerText = parseInt(equipoVisitante7.value) + parseInt(equipoVisitante9.value) + parseInt(equipoLocal12.value)
    golesgal.innerText = parseInt(equipoVisitante8.value) + parseInt(equipoLocal9.value) + parseInt(equipoLocal11.value)
    golesusa.innerText = parseInt(equipoLocal8.value) + parseInt(equipoLocal10.value) + parseInt(equipoVisitante12.value)
    //CALCULO GOLES EN CONTRA GRUPO B
    golesconing.innerText = parseInt(equipoVisitante7.value) + parseInt(equipoLocal10.value) + parseInt(equipoLocal11.value)
    golesconira.innerText = parseInt(equipoLocal7.value) + parseInt(equipoLocal9.value) + parseInt(equipoVisitante12.value)
    golescongal.innerText = parseInt(equipoLocal8.value) + parseInt(equipoVisitante9.value) + parseInt(equipoVisitante11.value)
    golesconusa.innerText = parseInt(equipoVisitante8.value) + parseInt(equipoVisitante10.value) + parseInt(equipoLocal12.value)
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
        golesarg.innerText = parseInt(equipoLocal13.value) + parseInt(equipoLocal15.value) + parseInt(equipoLocal17.value)
        golesars.innerText = parseInt(equipoVisitante13.value) + parseInt(equipoLocal16.value) + parseInt(equipoVisitante18.value)
        golesmex.innerText = parseInt(equipoLocal14.value) + parseInt(equipoVisitante15.value) + parseInt(equipoLocal18.value)
        golespol.innerText = parseInt(equipoVisitante14.value) + parseInt(equipoVisitante16.value) + parseInt(equipoVisitante17.value)
        //CALCULO GOLES EN CONTRA GRUPO C
        golesconarg.innerText = parseInt(equipoVisitante13.value) + parseInt(equipoVisitante15.value) + parseInt(equipoVisitante17.value)
        golesconars.innerText = parseInt(equipoLocal13.value) + parseInt(equipoVisitante16.value) + parseInt(equipoLocal18.value)
        golesconmex.innerText = parseInt(equipoVisitante14.value) + parseInt(equipoLocal15.value) + parseInt(equipoVisitante18.value)
        golesconpol.innerText = parseInt(equipoLocal14.value) + parseInt(equipoLocal16.value) + parseInt(equipoLocal17.value)
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
        golesfra.innerText = parseInt(equipoLocal19.value) + parseInt(equipoLocal22.value) + parseInt(equipoVisitante24.value)
        golesaus.innerText = parseInt(equipoVisitante19.value) + parseInt(equipoVisitante21.value) + parseInt(equipoLocal23.value)
        golesdin.innerText = parseInt(equipoLocal20.value) + parseInt(equipoVisitante22.value) + parseInt(equipoVisitante23.value)
        golestun.innerText = parseInt(equipoVisitante20.value) + parseInt(equipoLocal21.value) + parseInt(equipoLocal24.value)
        //CALCULO GOLES EN CONTRA GRUPO D
        golesconfra.innerText = parseInt(equipoVisitante19.value) + parseInt(equipoVisitante22.value) + parseInt(equipoLocal24.value)
        golesconaus.innerText = parseInt(equipoLocal19.value) + parseInt(equipoLocal21.value) + parseInt(equipoVisitante23.value)
        golescondin.innerText = parseInt(equipoVisitante20.value) + parseInt(equipoLocal22.value) + parseInt(equipoLocal23.value)
        golescontun.innerText = parseInt(equipoLocal20.value) + parseInt(equipoVisitante21.value) + parseInt(equipoVisitante24.value)
        //DIFERENCIA GOLES GRUPO D
        difgolfra.innerText = parseInt(golesfra.innerText) - parseInt(golesconfra.innerText)
        difgolaus.innerText = parseInt(golesaus.innerText) - parseInt(golesconaus.innerText)
        difgoldin.innerText = parseInt(golesdin.innerText) - parseInt(golescondin.innerText)
        difgoltun.innerText = parseInt(golestun.innerText) - parseInt(golescontun.innerText)
parseInt('') === 0 
  });}