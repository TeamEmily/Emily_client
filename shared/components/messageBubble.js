import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class MessageBubble extends React.Component {
  render() {
    return (
      <View>
        <Text style={[styles.text, this.props.fromUser && styles.fromUser]}>{this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    margin: 3,
    backgroundColor: '#DCDCDC',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 3,
    width: '50%'
  },
  fromUser: {
    alignSelf: 'flex-end',
    backgroundColor: '#26c5a8'
  }
});
