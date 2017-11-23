import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class MessageBubble extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.fromUser && styles.fromUser]}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 3,
    backgroundColor: '#FFDAB9',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 3,
    alignSelf: 'flex-start'
  },
  fromUser: {
    alignSelf: 'flex-end',
    backgroundColor: '#87CEFA'
  }
});
