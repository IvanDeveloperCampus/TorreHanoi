import { getuser, addUser } from "./metodosApi.js";
import logica from "./logicaJuego.js";

const obtenerUser = async () => {
  const response = await getuser();
  const ranking = response.sort((a, b) => {
    const tiempoA = convertirTiempo(a.tiempo);
    const tiempoB = convertirTiempo(b.tiempo);
    return tiempoA - tiempoB;
  });
  const container = document.querySelector(".tableRanking");
  let html = "";
  ranking.map((info) => {
    html += `
            <tr class="text-center">
                <td>${info.id}</td>
                <td>${info.name}</td>
                <td>${info.tiempo}</td>
            </tr>
        `;
  });
  container.insertAdjacentHTML("beforeend", html);
};

const guardarRegistro = () => {
  const input = document.getElementById("nombre").value;
  const name = input;
  const tiempo = logica.finalizarJuego();

  const datos = {
    name,
    tiempo,
  };

  addUser(datos);
};

function convertirTiempo(tiempo) {
  const partes = tiempo.split(":");
  const horas = parseInt(partes[0], 10);
  const minutos = parseInt(partes[1], 10);
  const segundos = parseInt(partes[2], 10);
  return horas * 3600 + minutos * 60 + segundos;
}

export default { obtenerUser, guardarRegistro };
