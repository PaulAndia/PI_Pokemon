import {Link} from 'react-router-dom';
import styles from './NavBar.module.css'
import logo from '../images/title.png'
import pika from '../images/pika.gif'
import Swal from 'sweetalert2';  

export function NavBar({backHome}) {

    function modal () {
        return  Swal.fire({
            title: '<strong>Paul Andrés Andia</strong>',
            html:
              '<img style="border-radius: 90px" src="https://avatars.githubusercontent.com/u/98241120?v=4" width = "170px" height = "170px"></img> <br/> ' + 
              '<h4>Full Stack Web Developer</h4> <br/>' + 
              '<a target="_blank" href="https://www.linkedin.com/in/paulandia/"><img style="padding-right: 50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" width = "67px" height = "67px"></img> </a>' +
              '<a target="_blank" href="https://github.com/PaulAndia"><img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png" width = "73px" height = "73px"></img></a>',
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Great!',
        })
    }
    

    return (
        <>
       <div className={styles.fullCont}>
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={logo} width="160px" height='60px' alt='logo'/>
                </Link>
            <img src={pika}  width="80px" height='60px' alt='pika'/>
            </div>
            
        <nav>
        <ul className={styles.navContainer}>
            <li>
                    <button  className={styles.menu} onClick={modal} >ABOUT</button>
            </li>

            <li>
                <Link to="/home">
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
            {/* <li>
                <SearchBar/>
            </li> */}
        </ul>
        </nav>
        </div>
        </div>
        </>
    )
}
