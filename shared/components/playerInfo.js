import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

export default class PlayerInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 30}}>
          <Text style={{textAlign: 'center'}}>{this.props.data.pl_name}</Text>
        </View>
        <View style={{flex: 5, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: 120, backgroundColor: 'white'}}>
            <Image
              style={{width: 120, height: 120}}
              source={{uri: this.props.data.pl_pic}}
            />
          </View>
          <View style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
            <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
              <Text style={{flex: 1, textAlign: 'center'}}>{this.props.data.team_name}</Text>
              <Text style={{flex: 1, textAlign: 'center'}}>team</Text>
            </View>
            <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
              <Text style={{flex: 1, textAlign: 'center'}}>생일</Text>
              <Text style={{flex: 1, textAlign: 'center'}}>{this.props.data.date_of_birth}</Text>
            </View>
            <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
              <Text style={{flex: 1, textAlign: 'center'}}>포지션</Text>
              <Text style={{flex: 1, textAlign: 'center'}}>{this.props.data.pl_position}</Text>
            </View>
            <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
              <Text style={{flex: 1, textAlign: 'center'}}>등번호</Text>
              <Text style={{flex: 1, textAlign: 'center'}}>{this.props.data.pl_num}</Text>
            </View>
            <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
              <Text style={{flex: 1, textAlign: 'center'}}>국가</Text>
              <Text style={{flex: 1, textAlign: 'center'}}>{this.props.data.nationality}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#DCDCDC',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    width: '100%'
  }
});
