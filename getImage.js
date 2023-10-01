const liImage = document.querySelector("#image")

export const getProfile = (characters) => {
    characters.map( (character) => {
        const li = document.createElement("li")

        li.textContent = character.name

        ulCharacter.appendChild(li)
    })
}