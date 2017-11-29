import { setCharacter, newUser } from '../actions/actions';
import { connect } from 'react-redux';
import InitialPage from '../components/initialPage';

const mapStateToProps = (state) => {
  return {
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    setCharacter: (character) => {
      return dispatch(setCharacter(character));
    },
    newUser: (name) => {
      return dispatch(newUser(name));
    }
  };
};

const InitialPageLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(InitialPage);

export default InitialPageLayout;
