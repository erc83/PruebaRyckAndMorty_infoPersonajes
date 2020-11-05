//import CharacterDetails from './detallesPersonajes'
//console.log(CharacterDetails)

const IdPersonaje = (()=>{
    async function init() {
        const {results:characters} = await getCharacters()
        render(characters) 
    }    
    async function getCharacters() {
        try{
            const response = await fetch ("https://rickandmortyapi.com/api/character")
            const resp = await response.json()
            return resp
        }catch (error){
            console.error(error)
            return error
        }
    }
    function render(characters){
        const character_data = document.querySelector('.resultados')
        const html = characters.map(character => `<div>
                <img src="${character.image}">    
            <li>
                <p><strong>Id:</strong> ${character.id}</p>
                <p><strong>Nombre:</strong> ${character.name}</p>
                <p><strong>Especie:</strong> ${character.species}</p>       
            </li>
            </div>`)

        const character_data_ul = document.createElement('ul')
        character_data_ul.className = 'row'
        character_data_ul.innerHTML = html.join(' ')
        character_data.appendChild(character_data_ul)
    }
    return { init }
})()
IdPersonaje.init()


