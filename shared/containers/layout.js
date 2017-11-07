import React from 'react';
import MessageBar from '../components/messagebar';

import {
  View,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
          <MessageBar/>
      </View>
    )
  }
}
