import React from "react";
import CatchButtonContainer from "../../../containers/CatchButtonContainer";
import Avatar from "../../Avatar/avatar";
import Spinner from "../../layout/Spinner";
import PropTypes from "prop-types";

class PokemonProfile extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getOnePokemonFunctionToProps(id);
  }
  render() {
    const currentProfile = this.props.onePokemonToPropsFromState.currentProfile;
    const loading = this.props.onePokemonToPropsFromState.loading;

    if (loading || currentProfile === null) {
      return <Spinner />;
    } else {
      let caught;
      if (currentProfile.isCaught === undefined) {
        caught = "not caught";
      } else if (currentProfile.isCaught === "true") {
        caught = "caught";
      }

      let formattedcatchData = "";
      if (currentProfile.catchDate) {
        const catchData = new Date(currentProfile.catchDate);
        let day = "0" + catchData.getDate();
        let month = "0" + (catchData.getMonth() + 1);
        let year = catchData.getFullYear();

        formattedcatchData = `${day.substr(-2)}.${month.substr(-2)}.${year}`;
      }

      return (
        <div className='container'>
          <div className='card mt-3 mb-3 pokemon-page__card'>
            <div className='row no-gutters'>
              <div className='col-md-5'>
                <Avatar id={currentProfile.id} name={currentProfile.name} />
              </div>
              <div className='col-md-5 pokemon-page__info'>
                <div className='card-body'>
                  <h5 className='card-title'>{currentProfile.name}</h5>
                </div>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>id: {currentProfile.id}</li>
                  <li className='list-group-item'>status: {caught}</li>
                  <li
                    className={
                      formattedcatchData
                        ? "list-group-item"
                        : "list-group-item hidden"
                    }
                  >
                    Catch date: {formattedcatchData}
                  </li>
                </ul>
                <div className='card-body'>
                  <div className='card-button mt-3'>
                    <CatchButtonContainer
                      id={currentProfile.id}
                      name={currentProfile.name}
                      isCaught={Boolean(currentProfile.isCaught)}
                      reloadPokemon={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

PokemonProfile.propTypes = {
  getOnePokemonFunctionToProps: PropTypes.func.isRequired,
  onePokemonToPropsFromState: PropTypes.shape({
    currentProfile: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }),
    loading: PropTypes.bool.isRequired
  })
};

export default PokemonProfile;
