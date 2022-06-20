import styles from './Pagination.module.css'

export function Pagination({fullPokemons, pokemonsPerPage, page, changePage}) {

    const numberOfPages = Math.ceil(fullPokemons.length/pokemonsPerPage);
    const buttons = [];
    for (let i = 0; i < numberOfPages; i++) buttons.push(i);
    
    return (
        <div>
            {buttons.map(e => (
                <button
                key={e}
                className={page === e+1 ? styles.currentPageButton : styles.buttonPage}
                onClick={() => changePage(e+1)}
                >{e+1}</button>
            ))}
        </div>
    )
}
