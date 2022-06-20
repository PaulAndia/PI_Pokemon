import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Landing.module.css'

export function Landing() {
    return (
        <div className={styles.container}>
            <div className={styles.bc}>
                <Link to="/pokemons">
                    <a href='' className={styles.button}>LET'S GET STARTED</a>
                </Link>
            </div>
            <div className={styles.title}>
            </div>
        </div>
    )
}
