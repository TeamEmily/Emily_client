import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class TeamRecordBar extends React.Component {
  render() {
    var fields = ["순위", "팀", "경기수", "승점", "승", "무", "패", "득실차"];
    return (
      <View style={styles.container}>
        {
          fields.map((field, i)=>{
            return (
              <Text style={{flex: field == "팀" ? 2 : 1, textAlign: 'center', color: 'white'}}
                key={"filed"+i}
              >
                {field}
              </Text>
            )
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#D3D3D3',
  }
});
