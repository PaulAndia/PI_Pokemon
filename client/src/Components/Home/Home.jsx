import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { clearPokemons, getAllPokemons } from '../../Redux/Actions';
import styles from './Home.module.css'
import {Link} from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { Loading } from '../Loading/Loading';
import { Pagination } from '../Pagination/Pagination';


export function Home() {
    const dispatch = useDispatch();
    const fullPokemons = useSelector(state => state.allPokemons);
    const msgError = useSelector(state => state.error);
    
    useEffect(() => {
        dispatch(getAllPokemons())
    }, [dispatch]);

    const backHome = () => {
        dispatch(clearPokemons())
        dispatch(getAllPokemons())
    }

    //---pokemonsPerPage---//
    const pokemonsPerPage = 12;
    const [page, setPage] = useState(1);
    const initialiIndex = (page*pokemonsPerPage)-pokemonsPerPage; 
    const finalIndex = (page*pokemonsPerPage);
    const pokemonsShownPerPage = fullPokemons.slice(initialiIndex, finalIndex);

    useEffect(()=> {
        setPage(1)
    }, [fullPokemons])

    function changePage(n) {
        return setPage(n);
    }
    //---pokemonsPerPage---//


    return (
        <>
        <NavBar backHome = {backHome}/>
        <Pagination fullPokemons={fullPokemons} pokemonsPerPage={pokemonsPerPage} page={page} changePage={changePage}/>
        <div>
            {msgError.length === 0 ? 
               (fullPokemons.length > 0 ? (
                <ul className={styles.grid}>
                    {pokemonsShownPerPage.map(pok => (
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
            ): <Loading />):
            <div className={styles.contnotFound}>
                <div className={styles.noFound}>
                    <p>{msgError}</p>
                </div>
            </div>}
        </div>
        </>
    )
}
