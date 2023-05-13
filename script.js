const discos=document.querySelectorAll(".disco")
const torres=document.querySelectorAll(".torre")


discos.forEach((disco)=>{
    disco.addEventListener("dragstart", (e)=>{
        console.log(e.target.id);
        e.dataTransfer.setData("text/plain", e.target.id)
    })
    disco.addEventListener("dragend", (e)=>{
        e.dataTransfer.clearData();
    })
})

torres.forEach((torre)=>{
    torre.addEventListener("dragover", (e)=>{
        e.preventDefault() //permite soltar y no salirse
   
    })
    torre.addEventListener("drop", soltarDisco)
})


function soltarDisco(e) {
    e.preventDefault();
    const discoId = e.dataTransfer.getData('text/plain');
    const disco=document.getElementById(discoId)
    e.target.appendChild(disco)
}



