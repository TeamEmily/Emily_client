import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableHighlight} from 'react-native';

export default class GameTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      data: this.parseDate(this.props.data)
    };
  }

  render() {
    console.log(this.state.data[this.state.index]);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableHighlight style={{width: 20, backgroundColor: 'green'}}  onPress={()=>{this.setState({index: this.state.index > 0 ? this.state.index - 1 : 0})}}>
            <View style={styles.arrowLeft}/>
          </TouchableHighlight>
          <Text style={styles.date}>{this.state.data[this.state.index][0].game_date}</Text>
          <TouchableHighlight style={{width: 20, backgroundColor: 'green'}} onPress={()=>{
            console.log('click');
            this.setState({index: this.state.index < this.state.data.length - 1 ? this.state.index + 1 : this.state.index})}
          }>
            <View style={styles.arrowRight} />
          </TouchableHighlight>
        </View>
        <ScrollView style={styles.body}>
          {this.renderColumn(this.state.data[this.state.index])}
        </ScrollView>
      </View>
    );
  }

  parseDate = (data) => {
    var allGame = [];
    var gameInday = [];
    var lastDate = '';
    data.forEach(gameInfo=>{
      var timeStamp = new Date(gameInfo.game_date);
      var dateStr = timeStamp.getMonth()+1 + '-' + timeStamp.getDate();
      var timeStr = timeStamp.getHours() + ':' + timeStamp.getMinutes();
      delete gameInfo["game_date"];
      gameInfo.game_time = timeStr;
      gameInfo.game_date = dateStr;
      if (!lastDate) {
        lastDate = dateStr;
        gameInday.push(gameInfo);
      }
      else if (lastDate == dateStr) {
        gameInday.push(gameInfo);
      }
      else {
        allGame.push(gameInday);
        gameInday = [];
        lastDate = dateStr;
        gameInday.push(gameInfo);
      }
    });

    return allGame;
  }

  renderColumn = (data) => {
    return data.map((gameInfo, i)=>{
      return (
        <View style={styles.column} key={"column"+i}>
          <Text style={{flex: 1, textAlign: 'center'}}>{gameInfo.game_time}</Text>
          <Text style={{flex: 2, textAlign: 'center'}}>{gameInfo.home_team}</Text>
          <Text style={{flex: 1, textAlign: 'center'}}>{gameInfo.home_score+":"+gameInfo.away_score}</Text>
          <Text style={{flex: 2, textAlign: 'center'}}>{gameInfo.away_team}</Text>
        </View>
      )
    })
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    margin: 10,
    backgroundColor: 'white'
  },
  header: {
    padding: 3,
    height: 50,
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  body: {
    height: 200
  },
  date: {
    flex: 1,
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  arrowRight: {
    width: 0,
    height: 0,
    borderTopWidth: 15,
    borderTopColor: 'transparent',
    borderBottomWidth: 15,
    borderBottomColor: 'transparent',
    borderLeftWidth: 15,
    borderLeftColor: 'white'
  },
  arrowLeft: {
    width: 0,
    height: 0,
    borderTopWidth: 15,
    borderTopColor: 'transparent',
    borderBottomWidth: 15,
    borderBottomColor: 'transparent',
    borderRightWidth: 15,
    borderRightColor: 'white'
  },
  column: {
    height: 50,
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
