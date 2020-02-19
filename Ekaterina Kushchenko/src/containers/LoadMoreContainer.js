import { connect } from "react-redux";
import { loadMore } from "../actions/actionCreators";
import LoadMoreButton from "../components/LoadMoreButton/LoadMoreButton";

const mapDispatchToProps = {
  loadMoreFunctionToProps: loadMore
};

export default connect(null, mapDispatchToProps)(LoadMoreButton);
