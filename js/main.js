import metodos from "./logicaRanking.js"
import logica  from "./logicaJuego.js";

addEventListener("DOMContentLoaded", (e)=>{
    metodos.obtenerUser();
    logica.eventos();
})


const formulario=document.querySelector("#formInicio")
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    logica.iniciarCronometro();
})