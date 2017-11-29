import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ImgArrow from '../image/arrow.png'

export default class Info extends React.Component {
  render() {
    const intents= [
      ["스물다섯번째 밤", "[ ]", "스물다섯번째 밤"],
      ["인사", "[ ]", "안녕"],
      ["배고파", "[ ]", "밥 먹고 싶다"],
      ["날씨", "[Date, City]", "오늘 밖에 덥니?"],
      ["팀 순위", "[FC]", "아스날 순위를 알려줘"],
      ["선수 정보", "[Players]", "손흥민 선수에 대해 알려줘"],
      ["게임 결과", "[Date, FC]", "첼시 대 토트넘 경기 어떻게 됐어?"],
      ["일정", "[Date, FC]", "리버풀 향후 스케쥴이 어떻게 되니?"],
      ["선수 활약", "[Players, FC]", "첼시 대 스완지 경기에서 기성용 선수 평점"],
      ["나쁜 말", "[ ]", "바보야"]
    ];
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Intent</Text>
          <TouchableHighlight
            style={{width: 35, position: 'absolute', left: 5}}
            onPress={()=>{Actions.pop()}}
          >
            <Image source={ImgArrow} style={{width: 35, height: 35}}/>
          </TouchableHighlight>
        </View>
        {
            intents.map((intent, i)=>{
              return(
                <View style={styles.block} key={"block"+i}>
                  <View style={{flex: 2, backgroundColor: '#ff9900', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.intentName}>{intent[0]}</Text>
                  </View>
                  <View style={{flex: 5, display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    <Text style={styles.description}>{intent[1]}</Text>
                    <Text style={styles.description}>{intent[2]}</Text>
                  </View>
                </View>
              )
            })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    backgroundColor: 'green',
    height: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 25, fontWeight: 'bold', fontFamily: 'Roboto-Bold', color: 'white'
  },
  block: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  intentName: {
    fontSize: 15, fontWeight: 'bold', fontFamily: 'Roboto-Medium', color: 'white'
  },
  description: {
    fontSize: 13, paddingLeft: 5, fontWeight: 'bold', fontFamily: 'Roboto-Medium', flex: 1
  }
});
