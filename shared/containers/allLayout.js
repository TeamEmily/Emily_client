import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import ChatLayout from './chatLayout';
import InitialPageLayout from './initialPageLayout';
import Hufs from '../components/hufs';
import Info from '../components/info';

export default class AllLayout extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="hufs" component={Hufs} initial={true} hideNavBar={true}/>
          <Scene key="chat" component={ChatLayout} hideNavBar={true}/>
          <Scene key="init" component={InitialPageLayout} hideNavBar={true}/>
          <Scene key="info" component={Info} hideNavBar={true}/>
        </Scene>
      </Router>
    );
  }
}
