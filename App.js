
import React, { Component } from 'react';
import TabNavigator from './routes/BottomTabsNavigator'


export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <TabNavigator />
      </>
    );
  }
}

