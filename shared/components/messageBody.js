import React from 'react';
import MessageBubble from './messageBubble';
import Message from './message';
import TeamRecordTable from './teamRecordTable';
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
            <MessageBubble fromUser={true} key={'message_bubble'+i}>
              <Message  text={json.data}/>
            </MessageBubble>
        );
        break;
      case "greeting":
      case "twenty-fifth_night":
        return (
            <MessageBubble fromUser={false} key={'message_bubble'+i}>
              <Message text={json.data}/>
            </MessageBubble>
        );
        break;
      case "team_stats":
        return (
          <MessageBubble fromUser={false} key={'message_bubble'+i}>
            <TeamRecordTable data={json.data}/>
            <Message  text={"현우야 코딩해라"}/>
          </MessageBubble>
        );
        break;
      case "weather":
        return (
          <MessageBubble fromUser={false} key={'message_bubble'+i}>
            <WeatherTable data={json.data[0]}/>
          </MessageBubble>
        );
        break;
      case "player_info":
        return (
          <MessageBubble fromUser={false} key={'message_bubble'+i}>
            <PlayerInfo data={json.data[0]}/>
          </MessageBubble>
        );
      case "game_records":
        return (
          <MessageBubble fromUser={false} key={'message_bubble'+i}>
            <MatchInfo data={json.data[0]}/>
          </MessageBubble>
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
