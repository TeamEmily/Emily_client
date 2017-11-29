import React from 'react';
import MessageBarLayout from './messageBarLayout';
import MessageBodyLayout from './messageBodyLayout';
import { ImageBackground, StyleSheet, View, Dimensions } from 'react-native';

export default class ChatLayout extends React.Component {
  render() {
    return (
      <ImageBackground
        style={styles.container}
        imageStyle={styles.image}
        source={require('../image/emily_background.png')}>
        <MessageBodyLayout/>
        <MessageBarLayout/>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
  image: {
    resizeMode: 'cover',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
