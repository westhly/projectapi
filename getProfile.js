const ulCharacter = document.querySelector("#character")

export const getProfile = (characters) => {
    characters.map( (character) => {
        const li = document.createElement("li")
        const img = document.createElement("img")
        const p = document.createElement("p")
        const span = document.createElement("span")
        const h2 = document.createElement("h2")
        const div = document.createElement("div")

        div.className = "card "
        li.className = "container card-body "
        h2.className = "name card-title"
        img.className = "img card-img-top" 
        p.className = "genero card-text mt-2"
        span.className = "location card-text"

        h2.textContent = character.name
        img.src = character.image
        p.textContent = "Gender: " + character.gender
        span.textContent = "Location: " + character.location.name

        ulCharacter.appendChild(div)
        div.appendChild(li)
        li.appendChild(h2)
        li.appendChild(img)
        li.appendChild(p)
        li.appendChild(span)
    })
}