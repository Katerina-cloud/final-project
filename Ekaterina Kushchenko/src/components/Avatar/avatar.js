import React from "react";
import PropTypes from "prop-types";

function Avatar(props) {
  return (
    <React.Fragment>
      {props.id && (
        <img
          className='card-img'
          src={require(`../../pokemons/${
            props.id <= 720 ? props.id : (props.id % 100) + 1
          }.png`)}
          alt={props.name}
        />
      )}
    </React.Fragment>
  );
}

Avatar.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default Avatar;
