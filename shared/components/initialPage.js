import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class InitialPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center', color: 'orange', fontWeight: 'bold', fontSize: 30}}>당신은 누구신가요?</Text>
        <Image source={require('../image/emily2.png')} style={styles.image}/>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <TouchableHighlight style={{flex: 1, backgroundColor: 'blue', height: 40, display: 'flex', justifyContent: 'center'}} onPress={()=>this.buttonPress(0)}>
            <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20}}>남</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{flex: 1, backgroundColor: 'red', height: 40, display: 'flex', justifyContent: 'center'}} onPress={()=>this.buttonPress(1)}>
            <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20}}>여</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  buttonPress = (sex) => {
    var woman = 'androssi';
    var man = ['khun', 'bam'];
    var character = sex == 0 ? man[Math.floor(Math.random() * 2)] : woman;
    this.props.setCharacter(character);
    this.props.newUser(character);
    Actions.chat()
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 250,
    height: 250,
  }
});
