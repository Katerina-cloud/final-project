import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";

const rootReducer = combineReducers({
  pokemonData: pokemonReducer
});

export default rootReducer;
