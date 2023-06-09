import { NavLink } from "react-router-dom";
import style from './Landing.module.css'

const Landing = () => {
    return (
        <div className={style.landingContainer}> 
            <h1 className={style.titleLanding}>POKEDEX 2.0</h1>
            <h3 className={style.textLanding}>Haga click en ingresar para sumergirse en el maravilloso mundo de los Pokémon</h3>
            <NavLink to='/home'>
                <button className={style.ingresarButton}>
                    <h2 className={style.textButton}>INGRESAR</h2>
                </button>
            </NavLink>
        </div>
    )
}

export default Landing;