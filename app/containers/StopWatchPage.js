import React, { Component } from 'react';
import Home from '../components/Home';
import NavBar from '../components/common/navbar';
import Timer from '../components/timer/timer'


export default class StopWatchPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Timer />
      </div>
    );
  }
}