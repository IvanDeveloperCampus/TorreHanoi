import{getuser, addUser} from "./Api.js"

addEventListener("DOMContentLoaded", (e)=>{
    obtenerUser();
})

const obtenerUser=async()=>{
    const response=await getuser();
    const container=document.querySelector(".tableRanking")
    let html="";
    response.map((info)=>{
        html+=`
            <tr>
                <td>${info.id}</td>
                <td>${info.name}</td>
                <td>${info.tiempo}</td>
            </tr>
        `
    })
    container.insertAdjacentHTML("beforeend", html)
    
}

