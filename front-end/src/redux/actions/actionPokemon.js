import axios from "axios";

export const GET_ALL_POKEMON = "GET_ALL_POKEMON";
export const GET_POKEMON = "GET_POKEMON";
export const FETCH_POKEMON_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_ERROR = "FETCH_POKEMON_ERROR";
const url = "http://localhost:3001/v2/pokemon";

const getAllPokemon = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(url);
      dispatch({
        type: GET_ALL_POKEMON,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchPokemonRequest = () => {
  return {
    type: FETCH_POKEMON_REQUEST,
  };
};

export const fetchPokemonSuccess = (pokemon) => {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload: pokemon,
  };
};

export const fetchPokemonError = () => {
  return {
    type: FETCH_POKEMON_ERROR,
  };
};

const getPokemon = (id) => {
  return async (dispatch) => {
    const data = await axios.get(`${url}/${id}`);
    dispatch({
      type: GET_POKEMON,
      payload: data.data,
    });
  };
};
const searchPokemon = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPokemonRequest());
      const data = await axios.get(`${url}/${id}`);
      data.data !== '' ? dispatch(fetchPokemonSuccess(data.data))
      : dispatch(fetchPokemonError())
    } catch (error) {
      console.log(error)
    }
  };
};

export { getAllPokemon, getPokemon,searchPokemon };
