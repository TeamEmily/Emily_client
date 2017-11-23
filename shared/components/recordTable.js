import React from 'react';
import { StyleSheet, View} from 'react-native';
import RecordBar from './recordBar';
import RecordColumn from './recordColumn';

export default class RecordTable extends React.Component {
  render() {
    this.sortData();
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

  sortData = () => {
    this.props.data.sort((a, b)=>{
        if (a.ranking > b.ranking) return 1;
        if (a.ranking < b.ranking) return -1;
        return 0;
    })
  }
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    margin: 10,
    backgroundColor: '#DCDCDC',
  }
});
