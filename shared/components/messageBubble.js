import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import ImgBam from '../image/bam.png';
import ImgEmily from '../image/emily1.png';
import ImgAndrossi from '../image/androssi.png';
import ImgKhun from '../image/khun.png';

export default class MessageBubble extends React.Component {
  render() {
    var imageSet = {
      khun: ImgKhun,
      bam: ImgBam,
      androssi: ImgAndrossi
    };
    var img = this.props.fromUser ? imageSet[this.props.user] : ImgEmily;
    return (
      <View style={{marginTop: 10, marginBottom: 10}}>
        <Image
          source={img}
          style={this.props.fromUser ? styles.imageFromUser : styles.image}
        />
        <View style={[styles.container, this.props.fromUser && styles.fromUser]}>
          {this.props.children}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 3,
    marginTop: 30,
    backgroundColor: '#FFDAB9',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 3,
    alignSelf: 'flex-start',
    overflow: 'visible'
  },
  fromUser: {
    alignSelf: 'flex-end',
    backgroundColor: '#87CEFA'
  },
  image: {
    width: 60,
    height: 60,
    position: 'absolute',
    left: 5,
    top: -5,
    zIndex: 1
  },
  imageFromUser: {
    width: 60,
    height: 60,
    position: 'absolute',
    right: 5,
    top: -5,
    zIndex: 1
  }
});
