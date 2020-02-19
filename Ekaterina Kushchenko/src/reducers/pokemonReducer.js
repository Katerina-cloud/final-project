import {
  HAS_ERROR,
  CATCH_POKEMON,
  SEARCH_BY_NAME,
  GET_POKEMONS,
  SET_LOADING,
  GET_CAUGHT_POKEMONS,
  GET_ONE_POKEMON,
  LOAD_MORE
} from "../actions/actions";

const initialState = {
  pokemons: [],
  caughtPokemons: [],
  currentProfile: null,
  pokemonsByName: [],
  current: null,
  loading: false,
  error: null,
  visible: 10
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false
      };
    case GET_CAUGHT_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false
      };
    case LOAD_MORE:
      return {
        ...state,
        visible: state.visible + 10
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        pokemons: action.payload,
        loading: false
      };
    case GET_ONE_POKEMON:
      return {
        ...state,
        currentProfile: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case HAS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case CATCH_POKEMON:
      const newPokemons = [...state.pokemons];
      newPokemons.forEach(pokemon => {
        if (pokemon.id === action.pokemonId) {
          pokemon.isCaught = "true";
          pokemon.catchDate = new Date(Date.now());
        }
      });
      return {
        ...state,
        pokemons: newPokemons
      };

    default:
      return state;
  }
};

export default pokemonReducer;
