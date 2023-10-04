//nombre, imagen, sexo, ubicacion
import { getProfile } from "./getProfile.js"


const request = async () => {
    try{
        const response = await fetch("https://rickandmortyapi.com/api/character")

        const resp = await response.json()
        console.log(resp)

        getProfile(resp.results)
        console.log(getProfile)

    }catch(err){
        console.log(err)
    }
}

request();