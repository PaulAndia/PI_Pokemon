const axios = require("axios");
const { Pokemon , Types } = require("../db");


const getPokemonsFromAPI = async () => {
    try {
        //const pokemonsAPI = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40");
        const pokemonsAPI = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=120&limit=40");
        const subreq = pokemonsAPI.data.results.map(async e => await axios.get(e.url))
        const result = await Promise.all(subreq); // ---> [{},{},{}]
        const pokemons = result.map( e => {
            return {
                id: e.data.id,
                name: e.data.name,
                image: e.data.sprites.other.dream_world.front_default,
                life: e.data.stats[0].base_stat,
                attack: e.data.stats[1].base_stat,
                defense: e.data.stats[2].base_stat,
                speed: e.data.stats[5].base_stat,
                height: `${e.data.height} dm.`,
                weight: `${e.data.weight} Lbs.`,
                types: e.data.types.map(t => t.type.name)
            }
        })
        return await pokemons; 
    } catch (error) {
        console.log(error);
    }
}

const getPokemonsFromDB = async () => {
    try {
        let infoDB = await Pokemon.findAll({
            include:{
                model: Types,
                attributes: ['name'],
                through: {attributes: []}
            }
        })
        // infoDB is an merged array between Pokemon and Types
        let pokemonsDB = await infoDB?.map(e => {
            return {
                id: e.id,
                name: e.name,
                image: e.image,
                life: e.life,
                attack: e.attack,
                defense: e.defense,
                speed: e.speed,
                height: e.height,
                weight: e.weight,
                types: e.types?.map(type => type.name),
            }
        })
        
        return pokemonsDB;
    } catch (error) {
        console.log(error);
    }
}


const getTotalPokemons = async () =>{
    try {
        const dataAPI = await getPokemonsFromAPI();
        const dataDB = await getPokemonsFromDB();
        const totalData = dataAPI.concat(dataDB);
        return totalData
    } catch (error) {
        console.log(error);
    }
}


const getPokemonsById = async (id) => {
        const pokeID = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const pokemonID = {
            id: pokeID.data.id,
            name: pokeID.data.name,
            image: pokeID.data.sprites.other.dream_world.front_default,
            life: pokeID.data.stats[0].base_stat,
            attack: pokeID.data.stats[1].base_stat,
            defense: pokeID.data.stats[2].base_stat,
            speed: pokeID.data.stats[5].base_stat,
            height: `${pokeID.data.height} dm.`,
            weight: `${pokeID.data.weight} Lbs.`,
            types: pokeID.data.types.map(t => t.type.name)
        }
        return pokemonID;
}

const postPokemon = async (pokeDataForm) => {
    try {
        const {name, image, life, attack, defense, speed, height, weight, types} = pokeDataForm;
        //types ---> ["type1", "type1",....]
        const newPokemonCreated = await Pokemon.create({ // newPokemonCreated --> it is an object
            name,
            image,
            life,
            attack,
            defense,
            speed,
            height,
            weight
        })
        types.forEach(e => {Types.findOrCreate({where: {name: e}})})
        let typesAddedToNewPokemon = await Types.findAll({where: {name: types}}); //--> []
        //console.log(typesAddedToNewPokemon)
        let addedTypes = await  newPokemonCreated.addTypes(typesAddedToNewPokemon)
        return addedTypes;
    } catch (error) {
        console.log(error)
    }
}


module.exports = {getPokemonsFromAPI, getPokemonsFromDB, getTotalPokemons, getPokemonsById, postPokemon}