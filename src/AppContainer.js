
import { connect } from 'react-redux';
import { setVisibilityFilter } from './action';
import Home from './components/Home';


function mapStateToProps(state) {
  return {
    displayType: state.displayType,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setVisibilityFilter: displayType => dispatch(setVisibilityFilter(displayType)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);