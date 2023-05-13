const discos=document.querySelectorAll(".disco")
const torres=document.querySelectorAll(".torre")

/***CONCEPTOS IMPORTANTES 
 * 
 * 1. dragstart=cuando comienza arrastrarse
 * 2.dragemd=cuando soltamos el mouse
 * 
 *3.dragenter=cuando el contenedor detecta algo
  4.dragleave=cuando ya no detecta nada
  5. dragover=disco en una sona valida, no neceseariamente bien adentro
  6. drop=se solto en una zona valida
  */


torres.forEach(torre=>{
    torre.addEventListener("dragenter", (e)=>{
        console.log("Disco adentro");
    })
    torre.addEventListener("dragleave", (e)=>{
        console.log("disco Afuera");
    })
    torre.addEventListener("dragover", (e)=>{
        e.preventDefault() //permite soltar y no salirse
        console.log("disco en una sona valida");
    })
    torre.addEventListener("drop", (e)=>{
        console.log("se solto en una sona valida");
        torre.appendChild(discos[5])
    })
})
