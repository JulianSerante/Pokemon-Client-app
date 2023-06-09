import { CLEAN_DETAIL, FILTER_BY_ORIGIN, FILTER_BY_TYPE, GET_POKEMONS, GET_POKEMON_ID, GET_POKEMON_NAME, ORDER_ABC, ORDER_ATTACK, RESET } from "./action_types";

const initialState = {
  allPokemons: [],
  pokemons: [],
  pokemonDetail: {},
  pokemonByName: [],
  actualPage: 1,
  pokemonPerPage: 12,
  currentOrder: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
        pokemons: action.payload,
        actualPage: action.page
      };
    case GET_POKEMON_ID:
      return { ...state, pokemonDetail: action.payload };
    case CLEAN_DETAIL:
      return { ...state, pokemonDetail: {} }
    case GET_POKEMON_NAME:
      return { ...state, pokemonByName: action.payload };
    case FILTER_BY_TYPE:
      const filteredType = state.allPokemons.filter(pokemon =>
        pokemon.types.some(type => type.name === action.payload)
      );
      return {
        ...state,
        pokemons: action.payload === "allPokemons" ? state.allPokemons : filteredType,
      };
    case FILTER_BY_ORIGIN:
      const filteredOrigin = state.allPokemons.filter(
        (pokemon) => pokemon.created === action.payload
      );
      return {
        ...state,
        pokemons: action.payload === "allPokemons" ? state.allPokemons : filteredOrigin,
      };
      case ORDER_ABC:
        const allPokemonsCopy = [...state.allPokemons]

        return{
            ...state,
            pokemons:
                action.payload === "A"
                ? allPokemonsCopy.sort((a, b) => a.name.localeCompare(b.name))
                : allPokemonsCopy.sort((a, b) => b.name.localeCompare(a.name)),
            currentOrder: action.payload
        }
      case ORDER_ATTACK:
        const allPokemonsCopy2 = [...state.allPokemons]

        return{
            ...state,
            pokemons:
                action.payload === "A"
                ? allPokemonsCopy2.sort((a, b) => a.attack - b.attack)
                : allPokemonsCopy2.sort((a, b) => b.attack - a.attack),
            currentOrder: action.payload
        }
        case RESET:
          return{
            ...state,
            pokemons:[...state.allPokemons]
          }
    default:
      return {...state};
  }
};

export default reducer;
