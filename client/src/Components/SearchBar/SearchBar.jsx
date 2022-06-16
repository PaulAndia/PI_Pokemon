import { useState} from 'react';
import { useDispatch } from "react-redux";
import { clearPokemons, getPokemonByName } from '../../Redux/Actions';
import { useHistory } from 'react-router-dom';

export function SearchBar() {
    const dispatch = useDispatch();
    const [searchName, setSearchName] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(); // it prevents the page from reloading
        if(searchName.length > 0){
            dispatch(clearPokemons());
            dispatch(getPokemonByName(searchName));
            history.push({search: `?name=${searchName}`});
           setSearchName(""); // It clears the search bar
       }
       else{
        alert("please write a name");
    }
    }

    const handleInputChange = (e) => {
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