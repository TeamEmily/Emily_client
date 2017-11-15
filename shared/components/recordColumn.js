import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class RecordBar extends React.Component {
  render() {
    var fields = [1, "teamname", "gamesplayed", "totalpoints", "winnum", "drawnum", "losenum", "goaldifference"];
    return (
      <View style={styles.container}>
        {
          fields.map((field, i)=>{
            return (
              <Text style={{flex: field == "teamname" ? 2 : 1, textAlign: 'center', color: 'white'}}
                key={"filed"+i}
              >
                {i === 0 ? 1 : this.props.data[field]}
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
    height: 20,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: "gray"
  }
});
