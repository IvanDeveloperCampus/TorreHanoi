import metodos from "./logicaRanking.js";

const discos = document.querySelectorAll(".disco");
const torres = document.querySelectorAll(".torre");

const eventos = () => {
  discos.forEach((disco) => {
    disco.addEventListener("dragstart", (e) => {
      if (e.target.parentElement.lastElementChild === e.target) {
        e.dataTransfer.setData("text/plain", e.target.id);
      } else {
        e.preventDefault();
      }
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
};

const soltarDisco = (e) => {
  const torreActual = e.target;
  e.preventDefault();
  const discoId = e.dataTransfer.getData("text/plain");
  const discoActual = document.getElementById(discoId);
  const ultimoDisco = traerUltimoDisco(torreActual);
  const tamaño = verificarTamaño(discoActual, ultimoDisco);
  if (tamaño) {
    torreActual.appendChild(discoActual);
    win();
  }
};

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
  
    if (torres[1].childElementCount === 6 || torres[2].childElementCount===6) {
      Swal.fire(
        'Good job!',
        'Has Ganadooo!',
        'success'
      )
      metodos.guardarRegistro();
    }
 
}

const cron = document.querySelector("#cronometro");

let tiempoactual;
let tiempoIntervalo;

function iniciarCronometro() {
  discos.forEach((disco) => {
    disco.style.display = "block";
  })
  tiempoactual = Date.now();
  tiempoIntervalo = setInterval(actualizarCronometro, 1000);
}

const actualizarCronometro = () => {
  const tiempoTranscurrido = Math.floor((Date.now() - tiempoactual) / 1000);
  const hours = Math.floor(tiempoTranscurrido / 3600);
  const minutes = Math.floor((tiempoTranscurrido % 3600) / 60);
  const seconds = tiempoTranscurrido % 60;
  const tiempoFormateado =
    formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
  cron.textContent = tiempoFormateado;
};

function formatTime(time) {
  return time.toString().padStart(2, "0");
}

function finalizarJuego() {
  clearInterval(tiempoIntervalo);
  const tiempoTranscurrido = cronometro.textContent;
  return tiempoTranscurrido;
}

export default { eventos, iniciarCronometro, finalizarJuego };
