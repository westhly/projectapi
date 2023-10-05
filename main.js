//nombre, imagen, sexo, ubicacion
import { getProfile } from "./getProfile.js"

document.addEventListener("DOMContentLoaded",() => {
    const random = getRandomInt(5,6)
    request(random)
})

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}

const request = async (page) => {
    try{
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page} `)

        const resp = await response.json()
        console.log(resp)

        

        getProfile(resp.results)
        console.log(getProfile)

    }catch(err){
        console.log(err)
    }
}

request();