import React from 'react';
import MessageBar from '../components/messagebar';
import MessageBody from '../components/messagebody';
import { View, StyleSheet } from 'react-native';

export default class App extends React.Component {
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
