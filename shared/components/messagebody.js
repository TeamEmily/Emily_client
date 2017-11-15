import React from 'react';
import MessageBubble from './messageBubble';
import RecordTable from './recordTable';
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
          <RecordTable data={json.data} key={'record_table'+i}/>
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
    display: 'flex'
  },
  text: {

  }
});
