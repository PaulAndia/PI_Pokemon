import {
    GET_ALL_POKEMONS, GET_POKEMON_DETAILS, CLEAR_DETAILS
} from './Actions';

// we define the initial state
const initialState = {
    allPokemons: [],
    details: []
}

const rootReducer = (state=initialState, action) =>{
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload
            }

        case GET_POKEMON_DETAILS:
            return {
                ...state,
                details: [action.payload]
            }
        case CLEAR_DETAILS:
            return {
                ...state,
                details: action.payload
            }
        default: 
        return {...state}
    }
}

export default rootReducer;