import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: ""
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchFunctionToProps(this.state.text);
    this.setState({ text: "" });
  };

  onClearPokemons = e => {
    e.preventDefault();
    this.props.searchFunctionToProps("");
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='"form-group"'>
          <input
            className='form-control mb-3'
            type='text'
            name='text'
            placeholder='Search Pokemons...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block btn-red'
          />
        </form>
        <button
          className='btn btn-light btn-block btn-red-light'
          onClick={this.onClearPokemons}
        >
          Clear
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  searchFunctionToProps: PropTypes.func.isRequired
};

export default Search;
