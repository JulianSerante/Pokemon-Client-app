import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById } from "../../redux/actions";
import style from "./Detail.module.css";
import { useParams } from "react-router-dom";

const Detail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemonById(id))
    }, [id, dispatch]);

    const pokemonDetail = useSelector(state => {return state.pokemonDetail});

    return (
        <div> 
            <h4>#{pokemonDetail?.id}</h4>
            <h1>{pokemonDetail?.name}</h1>
            <img className={style.image} src={pokemonDetail?.image} alt="" />
            <h3>Tipos:</h3>
            <ul>
                {pokemonDetail?.types?.map((type, index) => (
                    <li key={index}>{type.name.toUpperCase()}</li>
                ))}
            </ul>
            <h5>HP: {pokemonDetail?.hp}</h5>
            <h5>Ataque: {pokemonDetail?.attack}</h5>
            <h5>Defensa: {pokemonDetail?.defense}</h5>
            {pokemonDetail?.speed && <h5>Velocidad: {pokemonDetail.speed}</h5>}
            {pokemonDetail?.height && <h5>Altura: {pokemonDetail?.height}</h5>}
            {pokemonDetail?.weight && <h5>Peso: {pokemonDetail.weight}</h5>}
        </div>
    )
}

export default Detail;