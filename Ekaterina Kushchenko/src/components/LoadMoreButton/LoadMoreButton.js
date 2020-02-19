import React from "react";
import PropTypes from "prop-types";

class LoadMoreButton extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.loadMoreFunctionToProps}
        type='button'
        className='load-more-button btn btn-block'
      >
        Load more
      </button>
    );
  }
}

LoadMoreButton.propTypes = {
  loadMoreFunctionToProps: PropTypes.func.isRequired
};

export default LoadMoreButton;
