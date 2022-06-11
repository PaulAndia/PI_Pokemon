import { SearchBar } from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';

export function NavBar({backHome}) {
    return (
        <div>
            <div>
                <Link to="/pokemons">
                    <button onClick={backHome}>HOME</button>
                </Link>
            </div>
            <div>
                <Link to="/types">
                    <button>TYPES</button>
                </Link>
            </div>
            <SearchBar/>
        </div>
    )
}
