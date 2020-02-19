import axios from "axios";

import {
  SET_LOADING,
  HAS_ERROR,
  CATCH_POKEMON,
  SEARCH_BY_NAME,
  GET_POKEMONS,
  GET_CAUGHT_POKEMONS,
  GET_ONE_POKEMON,
  LOAD_MORE
} from "./actions";

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

export function hasError(value) {
  return {
    type: HAS_ERROR,
    value
  };
}

export function loadMore() {
  return {
    type: LOAD_MORE
  };
}

//get pokemons from server
export const getPokemons = () => {
  return async dispatch => {
    try {
      dispatch(setLoading());
      const res = await axios.get("http://localhost:4000/pokemons");
      const data = res.data;
      dispatch({
        type: GET_POKEMONS,
        payload: data
      });
    } catch (err) {
      dispatch(hasError(err));
    }
  };
};

//get caught pokemons from server
export const getCaughtPokemons = () => {
  return async dispatch => {
    try {
      dispatch(setLoading());
      const res = await axios.get("http://localhost:4000/caughtPokemons");
      const data = res.data;
      dispatch({
        type: GET_CAUGHT_POKEMONS,
        payload: data
      });
    } catch (err) {
      dispatch(hasError(err));
    }
  };
};

//get one pokemon from server
export const getOnePokemon = id => {
  return async dispatch => {
    try {
      dispatch(setLoading());
      const httpAddress = `http://localhost:4000/pokemons/${id}`;
      const res = await axios.get(httpAddress);
      const data = res.data;
      dispatch({
        type: GET_ONE_POKEMON,
        payload: data
      });
    } catch (err) {
      dispatch(hasError(err));
    }
  };
};

export function catchPokemon(pokemonId, pokemonName) {
  return async dispatch => {
    try {
      await axios.put(`http://localhost:4000/pokemons/${pokemonId}`, {
        name: pokemonName,
        isCaught: "true",
        catchDate: new Date(Date.now())
      });

      await axios.post(`http://localhost:4000/caughtPokemons`, {
        id: pokemonId,
        name: pokemonName,
        isCaught: "true",
        catchDate: new Date(Date.now())
      });

      dispatch({
        type: CATCH_POKEMON,
        pokemonId
      });
    } catch (err) {
      dispatch(hasError(err));
    }
  };
}

//search pokemons by name
export const searchByName = name => {
  return async dispatch => {
    try {
      dispatch(setLoading());
      const res = await axios.get(`http://localhost:4000/pokemons?q=${name}`);
      const data = res.data;
      dispatch({
        type: SEARCH_BY_NAME,
        payload: data
      });
    } catch (err) {
      dispatch(hasError(err));
    }
  };
};
