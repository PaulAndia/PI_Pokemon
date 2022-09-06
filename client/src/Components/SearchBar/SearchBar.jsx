import { useState} from 'react';
import { useDispatch } from "react-redux";
import { clearPokemons, getPokemonByName } from '../../Redux/Actions';
import { useHistory } from 'react-router-dom';
import styles from './SearchBar.module.css'
import Swal from 'sweetalert2';  
import {FaSearch} from "react-icons/fa"

export function SearchBar() {
    const dispatch = useDispatch();
    const [searchName, setSearchName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // it prevents the page from reloading
        if(searchName && searchName.length > 0){
            dispatch(clearPokemons());
            dispatch(getPokemonByName(searchName));
           setSearchName(""); // It clears the search bar
       }
       else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please insert a name!',
          })
    }
    }

    const handleInputChange = (e) => {
        setSearchName(e.target.value);   
    }

    return (
        <div className={styles.searchContainer}>
            <form onSubmit={handleSubmit} className = {styles.searchbox}>
                
                <input 
                className={styles.input} 
                type="text"
                value={searchName}
                onChange={(e) => handleInputChange(e)}
                placeholder="Search pokemon..."
                />
                <button className={styles.button} type='submit'>
                    <FaSearch/>
                </button>
                
            </form>
        </div>
    )
}