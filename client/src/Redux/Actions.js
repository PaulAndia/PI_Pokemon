import axios from 'axios';
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"; // 40 pokemons
export const GET_POKEMON_DETAILS = "GET_POKEMON_DETAILS"; 
export const CLEAR_DETAILS = "CLEAR_DETAILS"; 


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