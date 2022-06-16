import axios from 'axios';
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"; // 40 pokemons
export const GET_POKEMON_DETAILS = "GET_POKEMON_DETAILS"; 
export const GET_POKEMON_NAME = "GET_POKEMON_NAME"; 
export const CLEAR_DETAILS = "CLEAR_DETAILS"; 
export const GET_TYPES = "GET_TYPES"; 
export const MSG_ERROR = "MSG_ERROR"; 
export const CLEAR_POKEMONS = "CLEAR_POKEMONS";
export const POST_POKEMON = "POST_POKEMON";

const msgErr = {
    type: MSG_ERROR,
    payload: ["POKEMON NOT FOUND"]
}

export const getAllPokemons = () => {
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/pokemons");
            const pokemons = response.data; // ---> [{}. {},...]
            return dispatch({
                type: GET_ALL_POKEMONS,
                payload: pokemons
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getPokemonDetails = (id) => {
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/pokemons/${id}`)
            const pokemon = response.data; // --> {}
            return dispatch({
                type: GET_POKEMON_DETAILS,
                payload: pokemon
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const clearDetails = () => {
    return {
        type: CLEAR_DETAILS,
        payload: []
    }
}

export const getPokemonByName = (name) => {
    return async function(dispatch){
        try {
            if(name){
                const responseName = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
                const pokemonFound = responseName.data; // --> [{}, {}]
                    return dispatch({
                        type: GET_POKEMON_NAME,
                        payload: pokemonFound
                    })
            }
        } catch (error) {
            return dispatch(msgErr)
        }
        }
    }


export const getTypes = () => {
    return async function(dispatch){
        try {
            const resTypes = await axios.get("http://localhost:3001/types");
            const types = resTypes.data;
            return dispatch({
                type: GET_TYPES,
                payload: types
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export const clearPokemons = () => {
    return {
        type: CLEAR_POKEMONS,
        payload: []
    }
}

export const postPokemon = (formData) => {
    return async function(dispatch){
        await axios.post('http://localhost:3001/pokemon', formData);
        return dispatch({type: POST_POKEMON})
    }
}