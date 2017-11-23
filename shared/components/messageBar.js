import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export default class MessageBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  changeInput = (newMessage) => {
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
    height: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ff9900',
    padding: 3
  },
  input: {
    flex: 5,
    backgroundColor: '#e4e4e4',
    borderRadius: 3,
  },
  button: {
    flex: 1,
    backgroundColor: '#F5F5DC',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
  },
});
