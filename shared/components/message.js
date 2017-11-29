import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class Message extends React.Component {
  render() {
    return (
      <Text style={this.props.padding ? styles.padding : styles.text}>{this.props.text}</Text>
    )
  }
}

const styles = StyleSheet.create({
  padding: {
    width: 300,
    paddingLeft: 45
  },
  text: {
    width: 300,
    paddingLeft: 5
  }
});
