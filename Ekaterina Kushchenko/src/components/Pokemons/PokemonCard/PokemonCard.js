import React from "react";
import { Link } from "react-router-dom";
import CatchButtonContainer from "../../../containers/CatchButtonContainer";
import Avatar from "../../Avatar/avatar";
import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  const id = pokemon.id;
  const name = pokemon.name;
  const isCaught = Boolean(pokemon.isCaught);

  return (
    <div className='card mb-3 pokemon-card'>
      <Link to={`/pokemon/${id}`}>
        <Avatar id={id} name={name} />
      </Link>
      <div className='card-body'>
        <h5 className='card-title u-margin-bottom-small pokemon-card__title'>
          {name}
        </h5>
        <div className='pokemon-card__button'>
          <CatchButtonContainer id={id} name={name} isCaught={isCaught} />
        </div>
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    isCaught: PropTypes.string
  })
};

export default PokemonCard;
