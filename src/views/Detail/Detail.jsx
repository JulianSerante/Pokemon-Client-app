import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getPokemonById } from "../../redux/actions";
import style from "./Detail.module.css";
import { useParams } from "react-router-dom";

const Detail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemonById(id));

        return () => dispatch(cleanDetail());
    }, [id, dispatch]);

    const pokemonDetail = useSelector(state => state.pokemonDetail);

    return (
        <div className={style.detailContainer}>
            <div className={style.container1}>
                <h5 className={style.details}>#{pokemonDetail?.id}</h5>
                <h1 className={style.detailName}>{pokemonDetail?.name?.toUpperCase()}</h1>
                <img className={style.detailImg} src={pokemonDetail?.image} alt="" />
            </div>
            <div className={style.container2}></div>
            <div className={style.container3}>
            <h5 className={style.details}>Tipos:</h5>
            <ul className={style.detailTypes}>
                {pokemonDetail?.types?.map((type, index) => (
                    <li key={index}>{type.name.toUpperCase()}</li>
                ))}
            </ul>
            <h5 className={style.details}>HP: {pokemonDetail?.hp}</h5>
            <h5 className={style.details}>Ataque: {pokemonDetail?.attack}</h5>
            <h5 className={style.details}>Defensa: {pokemonDetail?.defense}</h5>
            {pokemonDetail?.speed && <h5 className={style.details}>Velocidad: {pokemonDetail.speed}</h5>}
            {pokemonDetail?.height && <h5 className={style.details}>Altura: {pokemonDetail?.height}</h5>}
            {pokemonDetail?.weight && <h5 className={style.details}>Peso: {pokemonDetail.weight}</h5>}
            </div>
        </div>
    )
}

export default Detail;