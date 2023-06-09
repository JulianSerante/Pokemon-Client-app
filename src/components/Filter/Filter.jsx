import { useDispatch } from "react-redux";
import { filterByType, filterByOrigin } from "../../redux/actions";
import style from './Filter.module.css'

const Filter = () => {

    const dispatch = useDispatch();

    const handleFilterType = (event) => {
        dispatch(filterByType(event.target.value))
    }

    const handleFilterOrigin = (event) => {
        dispatch(filterByOrigin(event.target.value))
    }

    return (
        <div className={style.filter}>
            <select name="type" id="" className={style.filterSelect} onChange={handleFilterType} defaultValue={'DEFAULT'}>
                    <option value="allPokemons">Filtrar por tipo</option>
                    <option value="normal">Normal</option>
                    <option value="fighting">Fighting</option>
                    <option value="flying">Flying</option>
                    <option value="poison">Poison</option>
                    <option value="ground">Ground</option>
                    <option value="rock">Rock</option>
                    <option value="bug">Bug</option>
                    <option value="ghost">Ghost</option>
                    <option value="steel">Steel</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="electric">Electric</option>
                    <option value="psychic">Psychic</option>
                    <option value="ice">Ice</option>
                    <option value="dragon">Dragon</option>
                    <option value="dark">Dark</option>
                    <option value="fairy">Fairy</option>
                    <option value="unknown">Unknown</option>
                    <option value="shadow">Shadow</option>
                </select>

                <select name="origin" id="" className={style.filterSelect} onChange={handleFilterOrigin} defaultValue={'DEFAULT'}>
                    <option value="allPokemons">Filtrar por origen de creación</option>
                    <option value="true">Pokemons creados por el usuario</option>
                    <option value="false">Pokemons pre-existentes</option>
                </select>
        </div>
    )
}

export default Filter;