import React from 'react';
import { StyleSheet, View} from 'react-native';
import TeamRecordBar from './teamRecordBar';
import TeamRecordColumn from './teamRecordColumn';

export default class TeamRecordTable extends React.Component {
  render() {
    this.sortData();
    return (
      <View style={styles.container}>
        <TeamRecordBar/>
        {
          this.props.data.map((record, i)=>{
            return (
              <TeamRecordColumn data={record} key={'recordColumn'+i}/>
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
    width: '90%',
    margin: 10,
    backgroundColor: '#DCDCDC',
  }
});
