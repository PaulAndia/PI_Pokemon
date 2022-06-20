import {useDispatch, useSelector} from 'react-redux';
import React, {useState} from 'react';
import {  filterAlphabetically, filterByTypes, filterCreate, filterByAttack } from '../../Redux/Actions';

export function Filters({fullPokemons}) {
    const dispatch = useDispatch();
    const typesPok = useSelector(state => state.types)
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
            filterAttack:0
        })
    }

    const handleAttack = (e) => {
        dispatch(filterByAttack(e.target.value))
        setfiltersState({
            ...filtersState,
            filterAttack: e.target.value,
            filterAlphabetically: 0
        })
    }

    return (
        <div>
            <select name="type" id="Type Filter" onChange={handleTypeFilter} value={filtersState.typesFilter}>
                <option value="">--Filter by Type of Pokemons--</option>
                {typesPok.map(e => 
                    (<option value={e.name}>{e.name}</option>)
                    )}
            </select>

            <select name="sort" id="Alphabetical order" value={filtersState.alphabeticalFilter} onChange={handleSort} >
                <option value="">--Filter by order--</option>
                <option value="A">A-Z</option>
                <option value="Z">Z-A</option>
            </select>

            <select  name="created" id="Created Filter" onChange={handleCreated} value={filtersState.filterCreated}>
                <option value="ALL">All Pokemons</option>
                <option value="POKEMONS CREATED">Pokemons created</option>
            </select>

            <select  name="attack" id="Attack Filter" onChange={handleAttack} value={filtersState.filterAttack}>
                <option value="">--Filter by Attack--</option>
                <option value="HIGH">HIGH TO LOW</option>
                <option value="LOW">LOW TO HIGH</option>
            </select>
        </div>
    )
}
