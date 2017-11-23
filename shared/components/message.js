import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class Message extends React.Component {
  render() {
    return (
        <Text style={styles.text}>{this.props.text}</Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    width: '50%'
  }
});
