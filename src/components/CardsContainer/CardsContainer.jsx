import style from './CardsContainer.module.css';
import Card from '../Card/Card';


const CardsContainer = ({pokemons}) => {

    return(
        <div className={style.container}>
            
            {
                pokemons.map(pokemon => {
                        return <Card 
                            key={pokemon.id}
                            id={pokemon.id}
                            name={pokemon.name}
                            image={pokemon.image}
                            types={pokemon.types} 
                        />
            })}
            
        </div>
    )
}

export default CardsContainer;