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
    h1.textContent = `¡Bienvenido/a ${name}!`
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


//DECLARO DIFERENTES VARIABLES Y OBJETOS
const mainId = "contenido";
const url = location.href;
let main = document.querySelector(`#${mainId}`);

const valorDeInput = localStorage.getItem("valores_de_input");

const datosFormulario = [];

const nombreCompleto = document.getElementById("entername");
//GRUPO A - FECHA 1
const qatar1 = document.getElementById("equipoLocal1");
const ecuador1 = document.getElementById("equipoVisitante1");
const senegal1 = document.getElementById("equipoLocal2");
const pbajos1 = document.getElementById("equipoVisitante2");
//GRUPO A - FECHA 2
const qatar2 = document.getElementById("equipoLocal3");
const senegal2 = document.getElementById("equipoVisitante3");
const ecuador2 = document.getElementById("equipoLocal4");
const pbajos2 = document.getElementById("equipoVisitante4");
//GRUPO A - FECHA 3
const ecuador3 = document.getElementById("equipoLocal5");
const senegal3 = document.getElementById("equipoVisitante5");
const pbajos3 = document.getElementById("equipoLocal6");
const qatar3 = document.getElementById("equipoVisitante6");
//GRUPO B - FECHA 1
const inglaterra1 = document.getElementById("equipoLocal7");
const iran1 = document.getElementById("equipoVisitante7");
const eeuu1 = document.getElementById("equipoLocal8");
const gales1 = document.getElementById("equipoVisitante8");
//GRUPO B - FECHA 2
const gales2 = document.getElementById("equipoLocal9");
const iran2 = document.getElementById("equipoVisitante9");
const eeuu2 = document.getElementById("equipoLocal10");
const inglaterra2 = document.getElementById("equipoVisitante10");
//GRUPO B - FECHA 3
const gales3 = document.getElementById("equipoLocal11");
const inglaterra3 = document.getElementById("equipoVisitante11");
const iran3 = document.getElementById("equipoLocal12");
const eeuu3 = document.getElementById("equipoVisitante12");
//GRUPO C - FECHA 1
const argentina1 = document.getElementById("equipoLocal13");
const arabia1 = document.getElementById("equipoVisitante13");
const mexico1 = document.getElementById("equipoLocal14");
const polonia1 = document.getElementById("equipoVisitante14");
//GRUPO C - FECHA 2
const argentina2 = document.getElementById("equipoLocal13");
const mexico2 = document.getElementById("equipoVisitante13");
const arabia2 = document.getElementById("equipoLocal14");
const polonia2 = document.getElementById("equipoVisitante14");
//GRUPO C - FECHA 3
const argentina3 = document.getElementById("equipoLocal15");
const polonia3 = document.getElementById("equipoVisitante15");
const mexico3 = document.getElementById("equipoLocal16");
const arabia3 = document.getElementById("equipoVisitante16");
//GRUPO D - FECHA 1
const francia1 = document.getElementById("equipoLocal13");
const australia1 = document.getElementById("equipoVisitante13");
const dinamarca1 = document.getElementById("equipoLocal14");
const tunez1 = document.getElementById("equipoVisitante14");
//GRUPO D - FECHA 2
const tunez2 = document.getElementById("equipoLocal13");
const australia2 = document.getElementById("equipoVisitante13");
const francia2 = document.getElementById("equipoLocal14");
const dinamarca2 = document.getElementById("equipoVisitante14");
//GRUPO D - FECHA 3
const australia3 = document.getElementById("equipoLocal15");
const dinamarca3 = document.getElementById("equipoVisitante15");
const tunez3 = document.getElementById("equipoLocal16");
const francia3 = document.getElementById("equipoVisitante16");


const btnguardo = document.getElementById("guardar");
/* const btnenvio = document.getElementById("enviar"); */

//SE CREA EL EVENTO DEL BOTÓN GUARDAR, GUARDANDO LOS DATOS EN LOCAL STORAGE

btnguardo.addEventListener("click", (e) => {
    e.preventDefault();

    const DatosFinales = {
        Nombre: nombreCompleto.value,
        //GRUPO A - FECHA 1
        A1Qatar: qatar1.value,
        A1Ecuador: ecuador1.value,
        A1Senegal: senegal1.value,
        A1PaisesBajos: pbajos1.value,
        //GRUPO A - FECHA 2
        A2Qatar: qatar2.value,
        A2Senegal: senegal2.value,
        A2Ecuador: ecuador2.value,
        A2PaisesBajos: pbajos2.value,
        //GRUPO A - FECHA 3
        A3Ecuador: ecuador3.value,
        A3Senegal: senegal3.value,
        A3PaisesBajos: pbajos3.value,
        A3Qatar: qatar3.value,
        //GRUPO B - FECHA 1
        B1Inglaterra: inglaterra1.value,
        B1Iran: iran1.value,
        B1EEUU: eeuu1.value,
        B1Gales: gales1.value,
        //GRUPO B - FECHA 2
        B2Gales: gales2.value,
        B2Iran: iran2.value,
        B2EEUU: eeuu2.value,
        B2Inglaterra: inglaterra2.value,
        //GRUPO C - FECHA 3
        B3Gales: gales3.value,
        B3Inglaterra: inglaterra3.value,
        B3Iran: iran3.value,
        B3EEUU: eeuu3.value,  
        //GRUPO C - FECHA 1
        C1Agentina: argentina1.value,
        C1ArabiaSaudita: arabia1.value,
        C1Mexico: mexico1.value,
        C1Polonia: polonia1.value,
        //GRUPO C - FECHA 2
        C2Agentina: argentina2.value,
        C2Mexico: mexico2.value,
        C2ArabiaSaudita: arabia2.value,
        C2Polonia: polonia2.value,
        //GRUPO C - FECHA 3
        B3Agentina: argentina3.value,
        B3Polonia: polonia3.value,
        B3Mexico: mexico3.value,
        B3ArabiaSaudita: arabia3.value,
        //GRUPO D - FECHA 1
        D1Francia: francia1.value,
        D1Australia: australia1.value,
        D1Dinamarca: dinamarca1.value,
        D1Tunez: tunez1.value,
        //GRUPO D - FECHA 2
        D2Tunez: tunez2.value,
        D2Australia: australia2.value,
        D2Francia: francia2.value,
        D2Dinamarca: dinamarca2.value,
        //GRUPO D - FECHA 3
        D3Australia: australia3.value,
        D3Dinamarca: dinamarca3.value,
        D3Tunez: tunez3.value,
        D3Francia: francia3.value, 
    };

    datosFormulario.push(DatosFinales);

    localStorage.setItem("valores_de_input", JSON.stringify(datosFormulario));

});

/* //EVENTO DEL BOTÓN ENVIAR

    btnenvio.addEventListener('click', (event) => {
        event.preventDefault();

        
    const DatosFinales = {
        nombre: nombreCompleto.value,
        nacimiento: fechaNacimiento.value,
        correo: email.value,
        telefono: telefono.value,
        curso: curso.value,
        precio_curso: precioCurso,
        cuotas: cuotas.value,
        precio_cuota: precioCuotas,
        paises: paises.value,
    };

    datosFormulario.push(DatosFinales);

    localStorage.setItem("valores_de_input", JSON.stringify(datosFormulario)); 

        let params = {
            public_key: 'KGXHxfAUgsoEayl8K',
            service_id: 'service_r0db0vd',
            template_id: 'template_kl38lkg',
            template_params: {
                to_email: email.value,
                from_name: "Formulario",
                to_name: nombreCompleto.value,
                message: curso.value,
                p_curso: precioCurso,
                n_cuotas: cuotas.value,
                p_cuota: precioCuotas,
                reply_to: "formulario",
                f_nacimiento: fechaNacimiento.value,
                to_telefono: telefono.value,
                to_pais: paises.value,
                to_curso: curso.value,}};

        let headers = {
            'Content-type': 'application/json'};
      
        let options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(params)};
        fetch('https://api.emailjs.com/api/v1.0/email/send', options)
          .then((httpResponse) => {
              if (httpResponse.ok) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: '¡Sus datos han sido enviados!',
                    showConfirmButton: false,
                    timer: 1500 })
              } else {
                  return httpResponse.text()
                    .then(text => Promise.reject(text));
              }})
          .catch((error) => {
              console.log('Oops... ' + error);});}); */