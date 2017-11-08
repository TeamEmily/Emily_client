import React from 'react';
import MessageBar from '../components/messageBar';
import MessageBody from '../components/messageBody';
import { View, StyleSheet } from 'react-native';

export default class AllLayout extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MessageBody/>
        <MessageBar/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: 5
  }
});
