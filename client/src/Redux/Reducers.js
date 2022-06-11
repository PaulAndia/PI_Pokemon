import {
    GET_ALL_POKEMONS, GET_POKEMON_DETAILS, 
    CLEAR_DETAILS, GET_POKEMON_NAME, GET_TYPES
} from './Actions';

// we define the initial state
const initialState = {
    allPokemons: [],
    pokemons: [],
    details: [],
    types:[]
}

const rootReducer = (state=initialState, action) =>{
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
                pokemons: action.payload
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
        case GET_POKEMON_NAME:
            return {
                ...state,
                allPokemons: action.payload,
            }
        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }
        default: 
        return {...state}
    }
}

export default rootReducer;