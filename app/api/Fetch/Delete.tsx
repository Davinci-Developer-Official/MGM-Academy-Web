export async function DeleteById(url:string,index:number){
    const response = await fetch(`${url}:${index}`,{
        method:"DELETE",
        cache:"no-cache",
        headers:{
            'Content-Type': 'application/json',  
        }
    })
}

export async function DeleteAll(url:string){
    const response = await fetch(`${url}`,{
        method:"DELETE",
        cache:"no-cache",
        headers:{
            'Content-Type': 'application/json',  
        }
    })
}