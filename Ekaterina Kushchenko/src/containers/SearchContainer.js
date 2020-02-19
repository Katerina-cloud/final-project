import { connect } from "react-redux";
import Search from "../components/Pokemons/Search/Search";
import { searchByName } from "../actions/actionCreators";

const mapDispatchToProps = {
  searchFunctionToProps: searchByName
};

export default connect(null, mapDispatchToProps)(Search);
