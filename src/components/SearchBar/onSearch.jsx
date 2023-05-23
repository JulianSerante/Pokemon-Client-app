import { useState } from "react";
import axios from "axios";

export const OnSearch = async (name) => {
    const [pokemons, setPokemons] = useState([])

    const { data } = await axios(`http://localhost:3001/pokemons/name?name=${name}`)

    setPokemons((pokemons) => [...pokemons, data]); 

}