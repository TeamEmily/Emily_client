import React from 'react';
import MessageBubble from './messageBubble';
import Message from './message';
import TeamRecordTable from './teamRecordTable';
import WeatherTable from './weatherTable';
import PlayerInfo from './playerInfo';
import MatchInfo from './matchInfo';
import GameTable from './gameTable';
import PerformanceInfo from './performanceInfo';
import { View, StyleSheet, Text, ScrollView} from 'react-native';
export default class MessageBody extends React.Component {
  constructor(props) {
    super(props);
    this.renderContent = this.renderContent.bind(this);
  }

  render() {
    console.log(this.props.logs);
    return (
      <ScrollView style={styles.container} ref="scrollView"
        onContentSizeChange={(contentWidth, contentHeight)=>{
          this.refs.scrollView.scrollTo({y: contentHeight, animated: true});
        }}
      >
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
            <MessageBubble fromUser={true} key={'message_bubble'+i} user={this.props.name}>
              <Message  text={json.data}/>
            </MessageBubble>
        );
        break;
      case "initial":
      return (
          <MessageBubble fromUser={false} key={'message_bubble'+i}>
            <Message text={json.data} padding={true}/>
          </MessageBubble>
      );
      break;
      case "greeting":
      case "twenty-fifth_night":
      case "bad_word":
      case "hungry":
        return (
            <MessageBubble fromUser={false} key={'message_bubble'+i}>
              <Message text={json.message} padding={true}/>
            </MessageBubble>
        );
      case "team_stats":
        return (
          <MessageBubble fromUser={false} key={'message_bubble'+i}>
            <TeamRecordTable data={json.data}/>
            <Message  text={json.message}/>
          </MessageBubble>
        );
      case "weather":
        return (
          <MessageBubble fromUser={false} key={'message_bubble'+i}>
            <WeatherTable data={json.data[0]}/>
            <Message  text={json.message}/>
          </MessageBubble>
        );
      case "player_info":
        return (
          <MessageBubble fromUser={false} key={'message_bubble'+i}>
            <PlayerInfo data={json.data[0]}/>
            <Message  text={json.message}/>
          </MessageBubble>
        );
      case "game_records":
        return (
          <MessageBubble fromUser={false} key={'message_bubble'+i}>
            <MatchInfo data={json.data[0]}/>
            <Message  text={json.message}/>
          </MessageBubble>
        );
      case "schedule":
        return (
          <MessageBubble fromUser={false} key={'message_bubble'+i}>
            <GameTable data={json.data}/>
            <Message  text={json.message}/>
          </MessageBubble>
        );
      case "player_performance":
        return (
          <MessageBubble fromUser={false} key={'message_bubble'+i}>
            <PerformanceInfo data={json.data}/>
            <Message  text={json.message}/>
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
