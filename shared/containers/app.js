import React from 'react';
import { connect } from 'react-redux';
import MessageBar from '../components/messagebar';

import {
  StyleSheet,
  View,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <MessageBar/>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
  },
});
