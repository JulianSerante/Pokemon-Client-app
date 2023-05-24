import CardsContainer from "../../components/CardsContainer/CardsContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";
import Filter from '../../components/Filter/Filter';
import Order from "../../components/Order/Order";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getPokemonByName, orderByABC } from '../../redux/actions';
import style from './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const allPokemons = useSelector(state => state.pokemons);
  const pokemonByName = useSelector(state => state.pokemonByName);
  const [actualPage, setActualPage] = useState(1);
  const itemsPerPage = 12;
  const currentOrder = useSelector(state => state.currentOrder);

  const handleSearch = search => {
    setSearch(search);
    setActualPage(1);
  };

  useEffect(() => {
    if (search) {
      dispatch(getPokemonByName(search));
    } else {
      dispatch(getPokemons(actualPage, currentOrder));
    }
  }, [search]);

  const handlePageChange = pageNumber => {
    setActualPage(pageNumber);
  };

  const handleOrderChange = orderABC => {
    dispatch(orderByABC(orderABC));
  };

  const displayedPokemon = search ? pokemonByName : allPokemons;
  const totalItems = displayedPokemon.length;
  const start = (actualPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const showPokemon = displayedPokemon.slice(start, end);

  return (
    <div>
      <div className={style.divSOF}>
        <SearchBar onSearch={handleSearch} />
        <Order currentOrder={currentOrder} handleOrderChange={handleOrderChange} />
        <Filter />
      </div>
      <CardsContainer pokemons={showPokemon} />
      <Pagination
        currentPage={actualPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
