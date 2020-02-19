import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import Spinner from "../../layout/Spinner";
import LoadMoreContainer from "../../../containers/LoadMoreContainer";
import PropTypes from "prop-types";

class PokemonСaughtCards extends React.Component {
  componentDidMount() {
    this.props.getCaughtPokemonsFunctionToProps();
  }

  render() {
    const { pokemons, loading, visible } = this.props.caughtPokemonDataProps;
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className='container mt-5'>
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

PokemonСaughtCards.propTypes = {
  getCaughtPokemonsFunctionToProps: PropTypes.func.isRequired,
  caughtPokemonDataProps: PropTypes.shape({
    pokemons: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    visible: PropTypes.number.isRequired
  })
};

export default PokemonСaughtCards;
