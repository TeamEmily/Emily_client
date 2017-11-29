import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default class WeatherTable extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
          <Text style={{flex: 1, textAlign: 'center'}}>지역</Text>
          <Text style={{flex: 2, textAlign: 'center'}}>오늘 오전</Text>
          <Text style={{flex: 2, textAlign: 'center'}}>오늘 오후</Text>
        </View>
        <View style={{flex: 2, display: 'flex', flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={{textAlign: 'center'}}>{this.props.data.city_name}</Text>
          </View>
          <View style={{flex: 2, display: 'flex', flexDirection: 'column'}}>
            <Text style={{flex: 1, textAlign: 'center'}}>{this.props.data.morn_weather}</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>{this.props.data.morn_rainfall}</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>{this.props.data.morn_temperature}"도"</Text>
          </View>
          <View style={{flex: 2, display: 'flex', flexDirection: 'column'}}>
            <Text style={{flex: 1, textAlign: 'center'}}>{this.props.data.noon_weather}</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>{this.props.data.noon_rainfall}</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>{this.props.data.noon_temperature}"도"</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DCDCDC',
    display: 'flex',
    flexDirection: 'column',
    width: 300
  }
});
