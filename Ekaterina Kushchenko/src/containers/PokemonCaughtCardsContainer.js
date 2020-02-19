import { connect } from "react-redux";
import { getCaughtPokemons } from "../actions/actionCreators";
import PokemonСaughtCards from "../components/Pokemons/PokemonCaughtCards/PokemonCaughtCards";

const mapStateToProps = state => ({
  caughtPokemonDataProps: state.pokemonData
});

const mapDispatchToProps = {
  getCaughtPokemonsFunctionToProps: getCaughtPokemons
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonСaughtCards);
