const ulCharacter = document.querySelector("#character")

export const getProfile = (characters) => {
    characters.map( (character) => {
        const li = document.createElement("li")
        const img = document.createElement("img")
        const p = document.createElement("p")
        const span = document.createElement("span")
        const h2 = document.createElement("h2")

        li.className = "container"
        h2.className = "name"
        img.className = "img"
        p.className = "genero"
        span.className = "location"

        h2.textContent = character.name
        img.src = character.image
        p.textContent = "Gender: " + character.gender
        span.textContent = "Location: " + character.location.name

        ulCharacter.appendChild(li)
        li.appendChild(h2)
        li.appendChild(img)
        li.appendChild(p)
        li.appendChild(span)
    })
}