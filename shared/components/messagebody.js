import React from 'react';
import MessageBubble from './messagebubble';
import { StyleSheet, Text, ScrollView} from 'react-native';

export default class MessageBody extends React.Component {
  render() {
    var text = ["안녕하세여", "반가워요", "오늘 하루 머해요?", "View maps directly to the native view equivalent on whatever platform React b","b","c","d","e","ff","g","h"];
    return (
      <ScrollView style={styles.container}>
        {text.map((val, i)=>{
          return (
            <MessageBubble text={val} fromUser={i%2==0} key={'message'+i}/>
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
