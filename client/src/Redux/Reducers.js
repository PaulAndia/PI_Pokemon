import {
    GET_ALL_POKEMONS, GET_POKEMON_DETAILS, 
    CLEAR_DETAILS, GET_POKEMON_NAME, GET_TYPES, MSG_ERROR,
    CLEAR_POKEMONS
} from './Actions';

// we define the initial state
const initialState = {
    allPokemons: [],
    details: [],
    types:[],
    error: []
}

const rootReducer = (state=initialState, action) =>{
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
                error: []
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
                error: []
            }
        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case CLEAR_POKEMONS:
            return {
                ...state,
                allPokemons: [],
                error: []
            }
        case MSG_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default: 
        return {...state}
    }
}

export default rootReducer;