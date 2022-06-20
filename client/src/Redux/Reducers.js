import {
    GET_ALL_POKEMONS, GET_POKEMON_DETAILS, 
    CLEAR_DETAILS, GET_POKEMON_NAME, GET_TYPES, MSG_ERROR,
    CLEAR_POKEMONS, POST_POKEMON, FILTER_ALPHABET, FILTER_TYPES, 
    FILTER_CREATED, FILTER_ATTACK
} from './Actions';

// we define the initial state
const initialState = {
    allPokemons: [],
    pokemonsAux: [],
    details: [],
    types:[],
    error: [],
}

const rootReducer = (state=initialState, action) =>{
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
                pokemonsAux: action.payload,
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
        case POST_POKEMON:
            return {
                ...state
            }
        case FILTER_ALPHABET:
            const orderAsc = (x,y) => {
                return (x.name.toLowerCase().localeCompare(y.name.toLowerCase()));
            }
            const orderDes = (x,y) => {
                return (y.name.toLowerCase().localeCompare(x.name.toLowerCase()));
            }
            let arr = [...state.allPokemons];
            let ord;
            if(action.payload === "A") {
                ord = arr.sort(orderAsc);
            }
            else if(action.payload === "Z") {
                ord = arr.sort(orderDes);
            }
            
            return {
                ...state,
                allPokemons: action.payload === "" ? state.pokemonsAux : ord
            }

        case FILTER_TYPES:
            const filtered = [...state.pokemonsAux]
            const filteredPokemons = action.payload === '' ? filtered: filtered?.filter(p => 
                p.types?.map(t => t.toLowerCase()).includes(action.payload.toLowerCase()))
            if(!filteredPokemons.length){
                return {
                    ...state,
                    error: "Pokemons not found for this type"
                }
            }
            return {
                ...state,
                allPokemons: filteredPokemons,
                error: []
            }

        case FILTER_CREATED:
            const all = [...state.allPokemons];
            const pokeDB = all.filter(p =>
                typeof(p.id) !== 'number'
                )
            let result;
            if(!pokeDB.length){
                return {
                    ...state,
                    error: "This type of pokemon was not created in DB"
                }
            }
            if(action.payload === "POKEMONS CREATED"){
                result = pokeDB;
            }
            else if(action.payload === "ALL"){
                result = state.pokemonsAux;
            }
       
            return {
                ...state,
                allPokemons: result
            }
            
            case FILTER_ATTACK:
            const copyPokem = [...state.allPokemons];
            let res;
            const highLow = (a, b) => {return b.attack - a.attack};
            const lowHigh = (a, b) => {return a.attack - b.attack};
            if(action.payload === "HIGH"){
                res = copyPokem.sort(highLow)
            }
            else if(action.payload === "LOW"){
                res = copyPokem.sort(lowHigh);
            }
            return {
                ...state,
                allPokemons: action.payload === '' ? state.pokemonsAux : res
            }

        default: 
        return {...state}
    }
}

export default rootReducer;