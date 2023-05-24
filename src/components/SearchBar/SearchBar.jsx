import { useState } from "react";
import style from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
    const [search, setSearch] = useState("");


    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(search);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleChange} value={search} placeholder="Nombre del Pokemon" className={style.searchInput}/>
            <button type="submit" className={style.searchButton}>Buscar 🔎</button>
        </form>
    )
}

export default SearchBar;