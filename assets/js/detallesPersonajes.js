import Characters from './personajes'

class CharacterDetails extends Characters{
    constructor (id, name, gender, species, status, create, origin, location, numEpisodes){
        super(id, name)
        this.gender = gender
        this.species = species
        this.status = status
        this.create = create
        this.origin = origin
        this.location = location
        this.numEpisodes = numEpisodes    
    }
    get gender(){
        return this.gender
    }
    get species(){
        return this.species
    }
    get status(){
        return this.status
    }   
    get create(){
        return this.create
    }
    get origin(){
        return this.origin
    }
    get location(){
        return this.location
    }
    get numEpisodes(){
        return this.numEpisodes
    }
}

//export default CharacterDetails

/*const CharacterDetail = (()=>{    
    async function init(){
        const {results:details} = await getCharacters()
        render(details)
        getDetails(2)
    }
    async function getDetails(id){
        try{
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const resp = await response.json()
            console.log(resp)
            return resp
        }catch(err){
            console.error(err)
            return err
        }
    }
    async function getCharacters(){
        try{
            const response = await fetch('https://rickandmortyapi.com/api/character/')
            const resp = await response.json()
            return resp
        }catch(err){
            console.error(err)
            return err
        }
    }
    function render(details){  // me manda el array
        const html = details.map(detail => detail)
        console.log(html)
    }
    return { init }
})()
characterDetail.init()*/
