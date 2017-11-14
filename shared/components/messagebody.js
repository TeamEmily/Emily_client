import React from 'react';
import MessageBubble from './messageBubble';
import { StyleSheet, Text, ScrollView} from 'react-native';

export default class MessageBody extends React.Component {
  render() {
    console.log(this.props.logs)
    return (
      <ScrollView style={styles.container}>
        {this.props.logs.map((val, i)=>{
          return (
            <MessageBubble text={val.data} fromUser={i%2==1} key={'message'+i}/>
          );
        })}
      </ScrollView>
    )
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
