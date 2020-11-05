//fetch("https://rickandmortyapi.com/", requestOptions)
//  .then(response => response.text())
//  .then(result => console.log(result))
// .catch(error => console.log('error', error));

class Characters {
    constructor(id, name ) {
        this._id = id
        this._name = name
    }
    get id (){
        return this._id
    }
    set id (id){
        return this._id
    }
    get name(){
        return this._name
    }
    set name(name){
        return this._name
    }
}

export default Characters