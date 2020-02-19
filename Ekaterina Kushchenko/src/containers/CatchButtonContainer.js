import React, { Component } from "react";
import { connect } from "react-redux";
import { catchPokemon, getOnePokemon } from "../actions/actionCreators";
import CatchButton from "../components/CatchButton/CatchButton";
import PropTypes from "prop-types";

class CatchButtonContainer extends Component {
  render() {
    return (
      <CatchButton
        id={this.props.id}
        name={this.props.name}
        isCaught={this.props.isCaught}
        reloadPokemon={this.props.reloadPokemon}
      />
    );
  }
}

CatchButtonContainer.propTypes = {
  id: PropTypes.number.isRequired,
  isCaught: PropTypes.bool,
  reloadPokemon: PropTypes.bool
};

const mapStateToProps = state => ({
  pokemonsToPropsFromState: state.pokemonData.pokemons
});

const mapDispatchToProps = {
  catchPokemonsFunctionToProps: catchPokemon,
  getOnePokemonFunctionToProps: getOnePokemon
};

export default connect(mapStateToProps, mapDispatchToProps)(CatchButton);
