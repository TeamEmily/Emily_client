import React from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  Text
} from 'react-native';

export default class MatchInfo extends React.Component {
  constructor(props) {
    super(props);
    this.renderColumn = this.renderColumn.bind(this);
  }
  render() {
    const keyMap = {
      team: 'VS',
      score: '결과',
      shoot: '슈팅 수',
      on_target: '유효 슈팅',
      poss: '점유율',
      foul: '파울 수',
      yellow: '경고',
      red: '퇴장'
    }
    let keys = Object.keys(keyMap);
    let self = this;
    return (
      <View style={styles.container}>
        {
          keys.map((key) => {
            let home_value_key = 'home_'+key;
            let away_value_key = 'away_'+key;
            return self.renderColumn(keyMap[key], this.props.data[home_value_key], this.props.data[away_value_key])
          })
        }
      </View>
    )
  }

  renderColumn = (name, homeValue, awayValue) => {
    return (
      <View style={styles.column} key={name}>
        <View style={styles.row}>
          <Text style={styles.text}>{homeValue}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{awayValue}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 250,
    display: 'flex',
    flexDirection: 'column',
    margin: 3,
    backgroundColor: '#DCDCDC'
  },
  column: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row'
  },
  row: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center'
  }
});
