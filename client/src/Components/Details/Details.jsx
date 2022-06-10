import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemonDetails, clearDetails } from '../../Redux/Actions';
import { useParams } from 'react-router-dom';


export function Details() {

    const {id} = useParams();
    const dispatch = useDispatch();
    const pokemonDetail = useSelector(state => state.details);
    
    useEffect(() => {
        dispatch(getPokemonDetails(id));
        return () => {
            dispatch(clearDetails());
        }
    }, [dispatch, id]);


    return (
        <div>
            { pokemonDetail.length > 0 ?
                (pokemonDetail.map(p => (
                    <div key={p.id}>
                        <img src={p.image} alt={p.name} 
                            width={220} height={226}
                            onError={e => {
                                e.target.onerror = null;
                                e.target.src = "https://media1.giphy.com/media/ehh35VzinMYyqxqANH/giphy.gif";    
                            }}
                        />
                        <h3>{p.name}</h3>
                        <p>Types: {p.types.join(", ")}</p>
                        <p>Life: {p.life}</p>
                        <p>Weight: {p.weight}</p>
                        <p>Height: {p.height}</p>
                    </div>
                )
                )): <p>LOADING....</p>}
        </div>
    )
}
