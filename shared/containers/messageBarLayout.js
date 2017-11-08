import { sendMessage } from '../actions/actions';
import { connect } from 'react-redux';
import MessageBar from '../components/messageBar';

const mapStateToProps = (state) => {
  return {
  };
};


const mapDispatchToProps = () => {
  return {
    sendMessage: (token) => {
      return dispatch(sendMessage(token));
    }
  };
};

const MessageBarLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBar);

export default MessageBarLayout;
