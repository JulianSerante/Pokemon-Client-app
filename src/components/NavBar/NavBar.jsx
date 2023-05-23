import { NavLink } from "react-router-dom";
import style from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={style.navBarContainer}>
            <NavLink to='/home' className={style.link}>HOME</NavLink>
            <NavLink to='/create' className={style.link}>CREA TU PROPIO POKEMON</NavLink>
        </div>
    )
}

export default NavBar;