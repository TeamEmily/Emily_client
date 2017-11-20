import React from 'react';
import MessageBubble from './messageBubble';
import RecordTable from './recordTable';
import WeatherTable from './weatherTable';
import PlayerInfo from './playerInfo';
import MatchInfo from './matchInfo'
import { View, StyleSheet, Text, ScrollView} from 'react-native';
export default class MessageBody extends React.Component {
  constructor(props) {
    super(props);
    this.renderContent = this.renderContent.bind(this);
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.logs.map((log, i)=>{
          return (
            this.renderContent(log, i)
          );
        })}
      </ScrollView>
    )
  }



  renderContent = (json, i) => {
    switch(json.intent) {
      case "user":
        return (
            <MessageBubble text={json.data} fromUser={true} key={'message_bubble'+i}/>
        );
        break;
      case "greeting":
      case "twenty-fifth_night":
        return (
            <MessageBubble text={json.data} fromUser={false} key={'message_bubble'+i}/>
        );
        break;
      case "team_stats":
        return (
          <RecordTable data={json.data} key={'record_table'+i}/>
        );
        break;
      case "weather":
        return (
          <WeatherTable data={json.data[0]} key={'weather_table'+i}/>
        );
        break;
      case "player_stats":
        return (
          <PlayerInfo data={json.data[0]} key={'player_stats'+i}/>
        );
      case "game_records":
        return (
          <MatchInfo data={json.data[0]} key={'game_records'+i}/>
        );
      default:
        return (
          <Text key={'h'+i}>hi</Text>
        )
    }
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 3,
    margin: 3,
    height: '90%'
  },
  text: {

  }
});
