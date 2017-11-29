import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ImgInfo from '../image/info.png'
import ImgArrow from '../image/arrow.png'

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={{width: 35, position: 'absolute', left: 5}}
          onPress={()=>{Actions.pop()}}
        >
          <Image source={ImgArrow} style={{width: 35, height: 35}}/>
        </TouchableHighlight>
        <TouchableHighlight
          style={{width: 35, position: 'absolute', right: 5}}
          onPress={()=>{Actions.info()}}
        >
          <Image source={ImgInfo} style={{width: 35, height: 35}}/>
        </TouchableHighlight>
        <Text style={{fontSize: 25, fontWeight: 'bold', fontFamily: 'Roboto-Medium', color: 'white'}}>Emily</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: '100%',
    backgroundColor: '#ff9900',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
