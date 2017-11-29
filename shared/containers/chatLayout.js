import React from 'react';
import MessageBarLayout from './messageBarLayout';
import Header from '../components/header';
import MessageBodyLayout from './messageBodyLayout';
import { ImageBackground, StyleSheet, View, Dimensions } from 'react-native';

export default class ChatLayout extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <ImageBackground
          style={{flex: 1}}
          imageStyle={styles.image}
          source={require('../image/emily_background.png')}>
          <MessageBodyLayout/>
          <MessageBarLayout/>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex'
  },
  image: {
    resizeMode: 'cover',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
