import React from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  changeInput = (newMessage) => {
    console.log(this.state.message);
    this.setState({message: newMessage});
  }

  sendMessage = () => {
    this.props.sendMessage(this.state.message);
    this.setState({message: ''});
    this.refs.messageInput.blur();
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref="messageInput"
          value={this.state.message}
          onChangeText={this.changeInput}
          onSubmitEditing={this.sendMessage}
          style={styles.input}
        />
      <TouchableHighlight
        style={styles.button}
        onPress={this.sendMessage}
      >
        <Text>send</Text>
      </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '8%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    margin: 3
  },
  input: {
    flex: 5,
    backgroundColor: '#e4e4e4',
    borderRadius: 3,
  },
  button: {
    flex: 1,
    backgroundColor: '#ff9900',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
  },
});
