import { connect } from 'react-redux';
import MessageBody from '../components/messageBody';

const mapStateToProps = (state) => {
  return {
    currentPostedUri: state.logs
  };
};


const mapDispatchToProps = () => {
  return {
  };
};

const MessageBodyLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBody);

export default MessageBodyLayout;
