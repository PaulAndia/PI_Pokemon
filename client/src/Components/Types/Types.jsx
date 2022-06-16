import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getTypes } from '../../Redux/Actions';

export function Types() {
    const dispatch = useDispatch();
    const typesPokemon = useSelector(state => state.types);

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch]);
    
    return (
        <div>
            <h1>TYPES OF POKEMON</h1>
                {typesPokemon?.map(e => 
                    (<li key={e.id}>
                        {e.name}
                    </li>)
                )}
        </div>
    )
}
