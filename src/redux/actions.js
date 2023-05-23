import axios from 'axios';
import { FILTER_BY_ORIGIN, FILTER_BY_TYPE, GET_POKEMONS, GET_POKEMON_ID, GET_POKEMON_NAME, ORDER_ABC, ORDER_ATTACK, RESET } from "./action_types";

export const getPokemons = (page, order) => {
  return async function(dispatch) {
    const apiData = await axios.get(`http://localhost:3001/pokemons?page=${page}&order=${order}`);
    const pokemons = apiData.data;
    dispatch({ type: GET_POKEMONS, payload: pokemons, page: page });
  };
};


export const getPokemonById = (id) => {
  return async function(dispatch) {
    const apiData = await axios.get(`http://localhost:3001/pokemons/${id}`);
    const pokemonDetail = apiData.data;
    dispatch({ type: GET_POKEMON_ID, payload: pokemonDetail });
  };
};

export const getPokemonByName = (name) => {
  return async function(dispatch) {
    const apiData = await axios.get(`http://localhost:3001/pokemons/name?name=${name}`);
    const pokemonByName = [apiData.data];
    dispatch({ type: GET_POKEMON_NAME, payload: pokemonByName });
  };
};

export const filterByType = (type) => {
  return {
    type: FILTER_BY_TYPE,
    payload: type
  };
};

export const filterByOrigin = (origin) => {
  const isCreated = origin === "true";
  return {
    type: FILTER_BY_ORIGIN,
    payload: isCreated
  };
};

export const orderByABC = (orderABC) => {
  return async function(dispatch) {
    dispatch({ type: ORDER_ABC, payload: orderABC });
  };
};

export const orderByAttack = (orderAttack) => {
  return async function(dispatch) {
    dispatch({ type: ORDER_ATTACK, payload: orderAttack });
  };
};

export const reset = () => {
  return ({
      type: RESET,
  })
}