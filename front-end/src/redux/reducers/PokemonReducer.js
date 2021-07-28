import { GET_ALL_POKEMON, FETCH_POKEMON_ERROR, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_REQUEST, GET_POKEMON } from "../actions/actionPokemon";

const initialState = {
  list_pokemons: [],
  pokemon: {},
  poke_data:null,
  loading: false,
  error: false,
};

export const pokemonReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_ALL_POKEMON:
      return {
        ...state,
        list_pokemons: actions.payload,
      };
      case GET_POKEMON:
          return{
              ...state,
              pokemon:actions.payload
          }
    case FETCH_POKEMON_REQUEST:
      return {
        ...state,
        pok_data: null,
        loading: true,
        error: false,
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        poke_data: actions.payload,
        loading: false,
        error: false,
      };
    case FETCH_POKEMON_ERROR:
      return {
        ...state,
        poke_data: null,
        loading: false,
        error: true,
      };
    default: {
      return state;
    }
  }
};
