import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import Spinner from "../../layout/Spinner";
import SearchContainer from "../../../containers/SearchContainer";
import LoadMoreContainer from "../../../containers/LoadMoreContainer";
import PropTypes from "prop-types";

class PokemonCards extends React.Component {
  componentDidMount() {
    this.props.getPokemonsFunctionToProps();
  }

  render() {
    const { pokemons, loading, visible } = this.props.pokemonDataProps;

    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className='container mt-5 mb-5'>
          <div className='mb-5'>
            <SearchContainer />
          </div>
          <div className='row row-cols-1 row-cols-md-2 justify-content-around'>
            {pokemons.slice(0, visible).map(pokemon => {
              return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
            })}
          </div>
          {visible < pokemons.length && <LoadMoreContainer />}
        </div>
      );
    }
  }
}

PokemonCards.propTypes = {
  getPokemonsFunctionToProps: PropTypes.func.isRequired,
  pokemonDataProps: PropTypes.shape({
    pokemons: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    visible: PropTypes.number.isRequired
  })
};

export default PokemonCards;
