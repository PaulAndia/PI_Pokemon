import {
    GET_ALL_POKEMONS
} from './Actions';

// we define the initial state
const initialState = {
    allPokemons: []
}

const rootReducer = (state=initialState, action) =>{
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload
            }
        default: 
        return {...state}
    }
}

export default rootReducer;