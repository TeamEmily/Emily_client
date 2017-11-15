import React from 'react';
import MessageBubble from './messageBubble';
import { View, StyleSheet, Text, ScrollView} from 'react-native';
import RecordBar from './recordBar';
import RecordColumn from './recordColumn';
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



  renderContent(json, i) {
    switch(json.intent) {
      case "user":
        return (
            <MessageBubble text={json.data} fromUser={true} key={'message_bubble'+i}/>
        );
        break;
      case "greeting":
        return (
            <MessageBubble text={json.data} fromUser={false} key={'message_bubble'+i}/>
        );
        break;
      case "rank_team":
        return (
          <View key={'record'+i}>
            <RecordBar key={'recordBar'+i}/>
            {
              json.data.map((record, j)=>{
                return (
                  <RecordColumn data={record} key={'recordColumn'+i+j}/>
                );
              })
            }
          </View>
        );
        break;
      default:
        return (
          <Text key={'h'+i}>hi</Text>
        )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 3,
    margin: 3,
    height: '90%',
    backgroundColor: 'yellow'
  },
  text: {

  }
});
