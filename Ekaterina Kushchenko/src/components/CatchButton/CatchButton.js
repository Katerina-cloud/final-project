import React from "react";
import PropTypes from "prop-types";

class CatchButton extends React.Component {
  state = {
    isCaught: null
  };

  componentDidMount() {
    if (this.props.isCaught === true) {
      this.setState({
        isCaught: true
      });
    }
  }

  handleClick = e => {
    this.props
      .catchPokemonsFunctionToProps(this.props.id, this.props.name)
      .then(() => {
        if (this.props.reloadPokemon) {
          this.props.getOnePokemonFunctionToProps(this.props.id);
        }
      });

    this.setState({
      isCaught: true
    });
    e.target.disabled = true;
  };

  render() {
    return (
      <button
        type='submit'
        className='btn catch-button col-lg-2 col-md-2'
        onClick={this.handleClick}
        disabled={this.state.isCaught === true}
      >
        Catch
      </button>
    );
  }
}

CatchButton.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isCaught: PropTypes.bool,
  reloadPokemon: PropTypes.bool
};

export default CatchButton;
