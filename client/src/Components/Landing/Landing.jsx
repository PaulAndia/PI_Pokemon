import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Landing.module.css'
import land from "../images/B2.jpg"
import logo from '../images/title.png'

export function Landing() {
    return (
        <div className={styles.cover}>
            <img src={land} alt="landing" width="100%"/>
                <Link to="/pokemons">
                    <button className={styles.button}>LET'S GET STARTED</button>
                </Link>
            <div className={styles.pokemon}>
                {/* <img src={logo} width="160px" height='60px' alt='logo'/> */}
            </div>
            <div className={styles.title}>
            </div>
            
        </div>

      
    )
}
