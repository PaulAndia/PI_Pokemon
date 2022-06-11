import { useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPokemonByName } from '../../Redux/Actions';
import { useHistory } from 'react-router-dom';

export function SearchBar() {
    const dispatch = useDispatch();
    const [searchName, setSearchName] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(); // it prevents the page from reloading
       history.push("/pokemons?name=" + searchName);
        dispatch(getPokemonByName(searchName));
        setSearchName(""); // It clears the search bar
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        setSearchName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={searchName}
                onChange={(e) => handleInputChange(e)}
                placeholder="Search pokemon..."
                />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}
