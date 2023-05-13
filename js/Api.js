const url="https://64600d48ca2d89f7e752b546.mockapi.io/usuarios"

export const addUser=async (user)=>{
    try {
        await fetch(url, {
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                "Content-Type":"application/json"
            }
        })
    } catch (error) {
        
    }
}

export const getuser=async()=>{
    try{
        const response=await fetch(url)
        const result=await response.json()
        return result;
    }catch(error){
        console.log(error);
    }
}