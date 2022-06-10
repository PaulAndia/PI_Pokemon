import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPokemons } from '../Redux/Actions'

export function Home() {
    const dispatch = useDispatch();
    const fullPokemons = useSelector(state => state.allPokemons)
    console.log(fullPokemons)
    useEffect(() => {
        dispatch(getAllPokemons())
    }, [dispatch]);

    return (
        <div>
            {fullPokemons.length > 0 ? (
                    fullPokemons.map(pok => (
                        <li>
                            <img src={pok.image} alt={pok.name} 
                                width={220} height={226}
                                onError={e => {
                                    e.target.onerror = null;
                                    e.target.src = "https://www.downloadclipart.net/medium/pokeball-png-file.png";    
                                }}/>
                            <p><u><strong>{pok.name}</strong></u></p>
                            <p>Type: {pok.types.join(", ")}</p>
                            <p>Life: {pok.life}</p>
                            
                        </li>
                    ))
            ): <p>LOADING...</p>}
        </div>
    )
}
