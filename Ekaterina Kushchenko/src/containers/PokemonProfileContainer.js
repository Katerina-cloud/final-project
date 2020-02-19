import { connect } from "react-redux";
import { getOnePokemon } from "../actions/actionCreators";
import PokemonProfile from "../components/Pokemons/PokemonProfile/PokemonProfile";

const mapStateToProps = state => ({
  onePokemonToPropsFromState: state.pokemonData
});

const mapDispatchToProps = {
  getOnePokemonFunctionToProps: getOnePokemon
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonProfile);
