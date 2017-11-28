import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';

export default class ModalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
    this.setModalVisible = this.setModalVisible.bind(this);
  }
  render() {
    return (
      <View style={{backgroundColor: 'green'}}>
        <TouchableHighlight
          onPress={()=>{this.setModalVisible(true)}}
        >
          <Text>{this.props.text}</Text>
        </TouchableHighlight>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
        >
          <TouchableWithoutFeedback
            onPress={(e)=>{
              this.setModalVisible(false)}
            }
          >
            <View
             style={styles.container}
            >
             {this.props.children}
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  }
});
