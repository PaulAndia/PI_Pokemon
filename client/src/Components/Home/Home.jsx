import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { clearPokemons, getAllPokemons, getTypes} from '../../Redux/Actions';
import styles from './Home.module.css'
import {Link} from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { Loading } from '../Loading/Loading';
import { Pagination } from '../Pagination/Pagination';
import { Filters } from '../Filters/Filters';


export function Home() {
    const dispatch = useDispatch();
    const fullPokemons = useSelector(state => state.allPokemons);
    const msgError = useSelector(state => state.error);
    console.log(fullPokemons)
    
   
        useEffect(() => {
            dispatch(getTypes())
            if(fullPokemons.length === 0 ) dispatch(getAllPokemons())
            return () => {
                dispatch(clearPokemons());
            }
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
        <div className={styles.nav}>
        <NavBar backHome = {backHome}/>
        <Filters fullPokemons={fullPokemons}/>
            
        </div>
        <div className={styles.back}>
            {msgError.length === 0 ?
               (fullPokemons.length > 0  ? (
                <ul className={styles.grid}>
                    {pokemonsShownPerPage.map(pok => (
                        <li key={pok.id} className={styles.cards}>
                            <Link to={`/pokemons/${pok.id}`}>
                                <h3><strong>{pok.name.toUpperCase()}</strong></h3>
                                    <img src={pok.image} alt={pok.name} 
                                    width={200} height={180}
                                    onError={e => {
                                        e.target.onerror = null;
                                        e.target.src = "https://media1.giphy.com/media/ehh35VzinMYyqxqANH/giphy.gif";    
                                    }}/>
                                    <p><strong>Type:</strong> <br/>{pok.types.map(el => el[0].toUpperCase()+el.substring(1)).join(", ")}</p>
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
        <div className={styles.pagfoot}>
                <Pagination fullPokemons={fullPokemons} pokemonsPerPage={pokemonsPerPage} page={page} changePage={changePage}/>
            </div>
        </>
    )
}