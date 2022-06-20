import { SearchBar } from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';
import styles from './NavBar.module.css'
import logo from '../images/title.png'

export function NavBar({backHome}) {
    return (
       <div className={styles.fullCont}>
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={logo} width="160px" height='60px' alt='logo'/>
                </Link>
            </div>
            
        <nav>
        <ul className={styles.navContainer}>
            <li>
                    <button  className={styles.menu}>ABOUT</button>
            </li>

            <li>
                <Link to="/pokemons">
                    <button onClick={backHome} className={styles.menu}>HOME</button>
                </Link>
            </li>

            <li>
                <Link to="/types">
                    <button className={styles.menu}>TYPES</button>
                </Link>
            </li>
            <li>
                <Link to="/pokemon">
                    <button className={styles.add}> + ADD POKEMON</button>
                </Link>
            </li>
            <li>
            <SearchBar/>
            </li>
        </ul>
        </nav>
        </div>
        </div>
    )
}
