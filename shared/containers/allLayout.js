import React from 'react';
import MessageBarLayout from './messageBarLayout';
import MessageBodyLayout from './messageBodyLayout';
import { View, StyleSheet } from 'react-native';

export default class AllLayout extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MessageBodyLayout/>
        <MessageBarLayout/>
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
