import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

export default class PlayerStat extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={(e)=>e.stopPropagation()}
      >
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={{flex: 1, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Stat</Text>
          </View>
          <View style={styles.column}>
            <Text style={{flex: 1, paddingLeft: 2}}>출전경기</Text>
            <Text style={{flex: 1, textAlign: 'right', paddingRight: 2}}>{this.props.data.played_games}</Text>
          </View>
          <View style={styles.column}>
            <Text style={{flex: 1, paddingLeft: 2}}>경기시간</Text>
            <Text style={{flex: 1, textAlign: 'right', paddingRight: 2}}>{this.props.data.min_played}분</Text>
          </View>
          <View style={styles.column}>
            <Text style={{flex: 1, paddingLeft: 2}}>골</Text>
            <Text style={{flex: 1, textAlign: 'right', paddingRight: 2}}>{this.props.data.goals}</Text>
          </View>
          <View style={styles.column}>
            <Text style={{flex: 1, paddingLeft: 2}}>어시스트</Text>
            <Text style={{flex: 1, textAlign: 'right', paddingRight: 2}}>{this.props.data.assists}</Text>
          </View>
          <View style={styles.column}>
            <Text style={{flex: 1, paddingLeft: 2}}>슛</Text>
            <Text style={{flex: 1, textAlign: 'right', paddingRight: 2}}>{this.props.data.shots}</Text>
          </View>
          <View style={styles.column}>
            <Text style={{flex: 1, paddingLeft: 2}}>패스</Text>
            <Text style={{flex: 1, textAlign: 'right', paddingRight: 2}}>{this.props.data.passes}</Text>
          </View>
          <View style={styles.column}>
            <Text style={{flex: 1, paddingLeft: 2}}>볼 터치</Text>
            <Text style={{flex: 1, textAlign: 'right', paddingRight: 2}}>{this.props.data.touches}</Text>
          </View>
          <View style={styles.column}>
            <Text style={{flex: 1, paddingLeft: 2}}>파울</Text>
            <Text style={{flex: 1, textAlign: 'right', paddingRight: 2}}>{this.props.data.fouls}</Text>
          </View>
          <View style={styles.column}>
            <Text style={{flex: 1, paddingLeft: 2}}>경고</Text>
            <Text style={{flex: 1, textAlign: 'right', paddingRight: 2}}>{this.props.data.card_yellow}</Text>
          </View>
          <View style={styles.column}>
            <Text style={{flex: 1, paddingLeft: 2}}>퇴장</Text>
            <Text style={{flex: 1, textAlign: 'right', paddingRight: 2}}>{this.props.data.card_red}</Text>
          </View>

        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    backgroundColor: 'white'
  },
  column: {
    height: 20,
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#e8e8e8'
  },
  title: {
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#267788'
  }
});
