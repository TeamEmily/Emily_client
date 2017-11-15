import React from 'react';
import { StyleSheet, View} from 'react-native';
import RecordBar from './recordBar';
import RecordColumn from './recordColumn';

export default class RecordTable extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RecordBar/>
        {
          this.props.data.map((record, i)=>{
            return (
              <RecordColumn data={record} key={'recordColumn'+i}/>
            );
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#DCDCDC',
  }
});
