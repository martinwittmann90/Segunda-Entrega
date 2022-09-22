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

let database = 'valores_de_input'
const getData = async () => {
  const res = await localStorage[database] ? JSON.parse(localStorage[database]) : []
  return res
}
const setData = (data) => {
  localStorage[database] = JSON.stringify(data)
}
const usuarioSim = "usuarioSimulador";
const url = location.href;
let form = document.querySelector(`#${usuarioSim}`);
const resultadoSimulador = [];
const nombreUsuario = document.getElementById("entername");
const local1 = document.getElementById("equipoLocal1");
const visitante1 = document.getElementById("equipoVisitante1");
const local2 = document.getElementById("equipoLocal2");
const visitante2 = document.getElementById("equipoVisitante2");
const local3 = document.getElementById("equipoLocal3");
const visitante3 = document.getElementById("equipoVisitante3");
const local4 = document.getElementById("equipoLocal4");
const visitante4 = document.getElementById("equipoVisitante4");
const local5 = document.getElementById("equipoLocal5");
const visitante5 = document.getElementById("equipoVisitante5");
const local6 = document.getElementById("equipoLocal6");
const visitante6 = document.getElementById("equipoVisitante6");

const obtenerDatos = async () => {
  const datos = await getData()
  /* nombreUsuario.value = datos[0].nombre */
  local1.value = datos[0].qatarUno
  visitante1.value = datos[0].ecuadorUno
  local2.value = datos[0].senegalUno
  visitante2.value = datos[0].paisesBajosUno
  local3.value = datos[0].qatarDos
  visitante3.value = datos[0].senegalDos
  local4.value = datos[0].paisesBajosDos
  visitante4.value = datos[0].ecuadorDos
  local5.value = datos[0].ecuadorTres
  visitante5.value = datos[0].senegalTres
  local6.value = datos[0].paisesBajosTres
  visitante6.value = datos[0].qatarTres}

let precioCurso = "";
let precioCuotas = parseInt("");

const btnguardo = document.getElementById("guardar");
const btnenvio = document.getElementById("enviar");

const save = () => {
  const DatosFinales = {
    nombre: nombreUsuario.value,
    qatarUno: equipoLocal1.value,
    ecuadorUno: equipoLocal2.value,
    senegalUno: equipoVisitante2.value,
    paisesBajosUno: equipoLocal3.value,
    qatarDos: equipoVisitante3.value,
    senegalDos: equipoVisitante3.value,
    paisesBajosDos: equipoLocal4.value,
    ecuadorDos: equipoVisitante4.value,
    ecuadorTres: equipoLocal5.value,
    senegalTres: equipoVisitante5.value,
    paisesBajosTres: equipoLocal6.value,
    qatarTres: equipoVisitante6.value,
  };
  datosFormulario.push(DatosFinales);
  setData(datosFormulario)
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: '¡Tu predicción ha sido guardada!',
    showConfirmButton: false,
    timer: 1500
  })}
btnguardo.addEventListener("click", (e) => {
  e.preventDefault();
  save()
});
obtenerDatos()



/* localStorage.setItem('bienvenida', '¡Hola!');
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
  }) */