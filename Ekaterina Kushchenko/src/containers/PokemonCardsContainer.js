import { connect } from "react-redux";
import { getPokemons } from "../actions/actionCreators";
import PokemonCards from "../components/Pokemons/PokemonCards/PokemonCards";

const mapStateToProps = state => ({
  pokemonDataProps: state.pokemonData
});

const mapDispatchToProps = {
  getPokemonsFunctionToProps: getPokemons
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCards);
