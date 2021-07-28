import axios from "axios";

export const GET_ALL_POKEMON = "GET_ALL_POKEMON";
export const GET_POKEMON = "GET_POKEMON";
const url ='http://localhost:3001/v2/pokemon'

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

const getPokemon = (id) => {
  return async (dispatch) => {
    const data = await axios.get(`${url}/${id}`);
    dispatch({
      type: GET_POKEMON,
      payload: data.data,
    });
  };
};

export { getAllPokemon, getPokemon };
