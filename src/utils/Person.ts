
export function personAge():number{
        return 2;
}

export function doublePersonAge():number{
    let age = personAge()
    console.log("original age: ", age)
    return age * 2;
}

export  function fetchPersonAge(): Promise<number>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            return resolve(5)
        }, 1000)
    })
}

export async function doubleFetchAge(): Promise<number>{
     const age = await fetchPersonAge()
     return age * 2;
}