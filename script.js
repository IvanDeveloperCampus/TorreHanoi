const discos = document.querySelectorAll(".disco");
const torres = document.querySelectorAll(".torre");

addEventListener("DOMContentLoaded", (e)=>{
   
})

discos.forEach((disco) => {
  disco.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  });
  disco.addEventListener("dragend", (e) => {
    e.dataTransfer.clearData();
  });
});

torres.forEach((torre) => {
  torre.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  torre.addEventListener("drop", soltarDisco);
});

function soltarDisco(e) {
  const torreActual = e.target;
  e.preventDefault();
  const discoId = e.dataTransfer.getData("text/plain");
  const discoActual = document.getElementById(discoId);
  const ultimoDisco = traerUltimoDisco(torreActual);
  const tamaño = verificarTamaño(discoActual, ultimoDisco);
  if (tamaño) {
    torreActual.appendChild(discoActual);
    win()
  } 
}

function traerUltimoDisco(torre) {
  const ultimoDisco = torre.lastElementChild;
  return ultimoDisco;
}

function verificarTamaño(discoNuevo, disco2) {
    if (disco2) {
      if (discoNuevo.offsetWidth < disco2.offsetWidth) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
 
}


function win() {
    torres.forEach(torre=>{
        if (torre.childElementCount===3) {
            alert("Has ganadoooo")
            finalizarJuego();
        }
    })
}

const formulario=document.querySelector("#formInicio")
const cron=document.querySelector("#cronometro")

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    iniciarCronometro();
})


let tiempoactual;
let tiempoIntervalo;
function iniciarCronometro() {
    tiempoactual=Date.now();
    tiempoIntervalo=setInterval(actualizarCronometro, 1000);
}

const actualizarCronometro=()=>{
    const tiempoTranscurrido=Math.floor((Date.now()-tiempoactual)/1000);
    const hours = Math.floor(tiempoTranscurrido / 3600);
    const minutes = Math.floor((tiempoTranscurrido % 3600) / 60);
    const seconds = tiempoTranscurrido % 60;
    const tiempoFormateado = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    cron.textContent=tiempoFormateado;
}


function formatTime(time) {
    return time.toString().padStart(2, "0");
  }


  function finalizarJuego() {
    clearInterval(tiempoIntervalo);
    const tiempoTranscurrido = cronometro.textContent;
    console.log("Tiempo transcurrido:", tiempoTranscurrido);
  }
