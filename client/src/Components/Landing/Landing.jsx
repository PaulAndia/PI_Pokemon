import React from 'react';
import {Link} from 'react-router-dom';

export function Landing() {
    return (
        <div>
            <h1>LANDING</h1>
            <div>
                <Link to="/pokemons">
                    <button >LET'S GET STARTED</button>
                </Link>
            </div>
        </div>
    )
}
