const REGISTERY_URL =  "your vercel route"

export async function fetchRegistryIndex() {
  
    const res = await fetch(`${REGISTERY_URL}/registry.json`)

    if(!res.ok){
        throw new Error("Failed to fetch registry index")
    }
    const data = await res.json()
    return data
}


export async function fetchRegistryFile(path:string) {

    const res = await fetch(`${REGISTERY_URL}/${path}`);

    if(!res.ok){
        throw new Error(`failed to fetch file: ${path}`)
    }
    
    return res.text()
}