import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class PerformanceInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 20, backgroundColor: 'white'}}>
          <Text style={{textAlign: 'center'}}>{this.props.data.pl_name}</Text>
        </View>
        <View style={{flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow'}}>
          <Text style={{textAlign: 'center'}}>{this.getDateStr(this.props.data.game_date)}</Text>
          <Image
            style={{width: 30, height: 30}}
            source={{uri: this.props.data.home_pic}}
          />
        <Text style={{flex: 2, textAlign: 'center'}}>{this.props.data.home_team}</Text>
        <Text style={{flex: 1, textAlign: 'center'}}>{this.props.data.home_score + " : "+this.props.data.away_score}</Text>
        <Text style={{flex: 2, textAlign: 'center'}}>{this.props.data.away_team}</Text>
          <Image
            style={{width: 30, height: 30}}
            source={{uri: this.props.data.away_pic}}
          />
        </View>
        <View style={{height: 120, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: 120, backgroundColor: 'white'}}>
            <Image
              style={{width: 120, height: 120}}
              source={{uri: this.props.data.pl_pic}}
            />
          </View>
          <View style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
            <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
              <Text style={{flex: 1, textAlign: 'center'}}>상태</Text>
              <Text style={{flex: 1, textAlign: 'center'}}>{this.props.data.status}</Text>
            </View>
            <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
              <Text style={{flex: 1, textAlign: 'center'}}>출전 시간</Text>
              <Text style={{flex: 1, textAlign: 'center'}}>{this.props.data.min_played}</Text>
            </View>
            <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
              <Text style={{flex: 1, textAlign: 'center'}}>골</Text>
              <Text style={{flex: 1, textAlign: 'center'}}>{this.props.data.goals}</Text>
            </View>
            <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
              <Text style={{flex: 1, textAlign: 'center'}}>어시스트</Text>
              <Text style={{flex: 1, textAlign: 'center'}}>{this.props.data.assists}</Text>
            </View>
            <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
              <Text style={{flex: 1, textAlign: 'center'}}>경고</Text>
              <Text style={{flex: 1, textAlign: 'center'}}>{this.props.data.card_yellow}</Text>
            </View>
            <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
              <Text style={{flex: 1, textAlign: 'center'}}>퇴장</Text>
              <Text style={{flex: 1, textAlign: 'center'}}>{this.props.data.card_red}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  getDateStr = (data) => {
    var timeStamp = new Date(data);
    return timeStamp.getMonth()+1 + '-' + timeStamp.getDate();
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#D3D3D3',
  }
});
