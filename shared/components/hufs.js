import React from 'react';
import { Animated, Text, View, Image } from 'react-native';

export default class Hufs extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 5000,
      }
    ).start();
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View
        style={{
          opacity: fadeAnim,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Image
          source={require("../image/hufs.gif")}
          style={{width: 200, height: 200}}
        />
        <Text style={{fontSize: 45, fontWeight: 'bold'}}>Hufs Emily</Text>
      </Animated.View>
    );
  }
}
