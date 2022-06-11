import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPokemons, getTypes } from '../../Redux/Actions';
import styles from './Home.module.css'
import {Link} from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';


export function Home() {    
    const dispatch = useDispatch();
    const fullPokemons = useSelector(state => state.allPokemons)
    
    
    useEffect(() => {
        dispatch(getAllPokemons())
        //dispatch(getTypes())
    }, [dispatch]);

    function backHome(){
        return  dispatch(getAllPokemons())
      }

    return (
        <>
        <NavBar backHome = {backHome}/>
        <div>
            {fullPokemons.length > 0 ? (
                <ul className={styles.grid}>
                    {fullPokemons.map(pok => (
                        <li key={pok.id}>
                            <Link to={`/pokemons/${pok.id}`}>
                                    <img src={pok.image} alt={pok.name} 
                                    width={220} height={226}
                                    onError={e => {
                                        e.target.onerror = null;
                                        e.target.src = "https://media1.giphy.com/media/ehh35VzinMYyqxqANH/giphy.gif";    
                                    }}/>
                                    <h3><strong>{pok.name}</strong></h3>
                                    <p>Type: {pok.types.join(", ")}</p>
                                    <p>Life: {pok.life}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            ): <p>LOADING...</p>}
        </div>
        </>
    )
}
