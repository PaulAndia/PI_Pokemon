import axios from 'axios';
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"; // 40 pokemons

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