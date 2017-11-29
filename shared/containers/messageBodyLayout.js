import { connect } from 'react-redux';
import MessageBody from '../components/messageBody';

const mapStateToProps = (state) => {
  return {
    logs: state.message.logs,
    name: state.character.name
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
