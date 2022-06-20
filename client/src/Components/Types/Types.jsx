import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { clearPokemons, getTypes } from '../../Redux/Actions';
import { NavBar } from '../NavBar/NavBar';
import styles from './Types.module.css'

export function Types() {
    const dispatch = useDispatch();
    const typesPokemon = useSelector(state => state.types);

    useEffect(() => {
        dispatch(getTypes())
        // dispatch(clearPokemons())
    }, [dispatch]);
    
    return (
        <>
        <NavBar/>
        <div className={styles.cont}>
            <div className={styles.typesPoke}></div>
            <ul className={styles.gridTypes}>
            {typesPokemon?.map(e => 
                    (<li key={e.id} className={styles.typescards}>
                        {e.name.toUpperCase()}
                    </li>)
                )}
            </ul>
            <div className={styles.chart}></div>
        </div>
        </>
    )
}
