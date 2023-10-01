const ulCharacter = document.querySelector("#character")

export const getProfile = (characters) => {
    characters.map( (character) => {
        const li = document.createElement("li")
        const img = document.createElement("img")

        li.textContent = character.name
        img.src = character.image

        ulCharacter.appendChild(li)
        li.appendChild(img)
    })
}