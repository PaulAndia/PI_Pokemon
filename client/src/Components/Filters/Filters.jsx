import {useDispatch, useSelector} from 'react-redux';
import React, {useState} from 'react';
import {  filterAlphabetically, filterByTypes, filterCreate, filterByAttack, clearFilters, getAllPokemons, clearPokemons} from '../../Redux/Actions';
import styles from './Filters.module.css'
import { SearchBar } from '../SearchBar/SearchBar';

export function Filters({fullPokemons}) {
    const dispatch = useDispatch();
    const typesPok = useSelector(state => state.types)
    const copyPok = useSelector(state => state.pokemonsAux);
  

    const [filtersState, setfiltersState] = useState({
        alphabeticalFilter: 0,
        typesFilter:0,
        filterCreated: 0,
        filterAttack: 0
    })

    const handleSort = (e) => {
        dispatch(filterAlphabetically(e.target.value))
        setfiltersState({
            ...filtersState,
            alphabeticalFilter: e.target.value,
            filterAttack: 0
        })
    }

    const handleTypeFilter = (e) => {
        dispatch(filterByTypes(e.target.value))
        setfiltersState({
            ...filtersState,
            typesFilter: e.target.value,
            alphabeticalFilter: 0,
            filterCreated: 0,
            filterAttack: 0
        }) 
    }

    
    const handleCreated = (e) => {
        dispatch(filterCreate(e.target.value))
        setfiltersState({
            ...filtersState,
            filterCreated: e.target.value,
            alphabeticalFilter: 0,
            filterAttack:0,
            typesFilter:0
        })
    }

    const handleAttack = (e) => {
        dispatch(filterByAttack(e.target.value))
        setfiltersState({
            ...filtersState,
            filterAttack: e.target.value,
            filterAlphabetically: 0,
            alphabeticalFilter:0
        })
    }

    const clearAllFilters = () => {
        // dispatch(clearFilters(copyPok))
        dispatch(clearPokemons())
        dispatch(getAllPokemons())
        setfiltersState({
            ...filtersState,
            alphabeticalFilter: 0,
            typesFilter:0,
            filterCreated: 0,
            filterAttack: 0
        })
    }

    return (
        <div className={styles.filtContainer}>
            <div className={styles.search}>
                <SearchBar/>
            </div>

            <div className={styles.filt}>
            <select name="type" id="Type Filter" onChange={handleTypeFilter} value={filtersState.typesFilter}>
                <option value="">--All types--</option>
                {typesPok.map(e => 
                    (<option value={e.name}>{e.name}</option>)
                    )}
            </select>
            </div>
            
            <div className={styles.filt}>
            <select name="sort" id="Alphabetical order" value={filtersState.alphabeticalFilter} onChange={handleSort} >
                <option value = "0" disabled>--Filter by order--</option>
                <option value="A">A-Z</option>
                <option value="Z">Z-A</option>
            </select>
            </div>
            
            
            
            <div className={styles.filt}>
            <select  name="attack" id="Attack Filter" onChange={handleAttack} value={filtersState.filterAttack}>
                <option value="0" disabled>--Filter by Attack--</option>
                <option value="HIGH">High to Low</option>
                <option value="LOW">Low to High</option>
            </select>
            </div>

            <div className={styles.filt}>
            <select  name="created" id="Created Filter" onChange={handleCreated} value={filtersState.filterCreated}>
                <option value="0" disabled>--Data Origin--</option>
                <option value="API">Pokemons from API</option>
                <option value="POKEMONS CREATED">Show Pokemons created</option>
                <option value="ALL">Show All</option>
            </select>
            </div>
            
            <div className={styles.filt}>
                <button onClick={clearAllFilters} className={styles.clear}>
                    Clear Filters
                </button>
            </div>
            
        </div>
    )
}
